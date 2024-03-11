const convertButton = document.querySelector(".convert-bt")
const currencySelect = document.querySelector(".currency-select")
const currencyOption = document.querySelector(".currency-option")

function covertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToCovert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueToConverted = document.querySelector(".currency-value")


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.4
    const bitcoinToday = 357
    const realToday = 1


    if (currencySelect.value == "real") {
        // se o select estiver selecionado o valor de dolar, entre aqui //
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelect.value == "dolar") {
        // se o select estiver selecionado o valor de dolar, entre aqui //
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        // se o select estiver selecionado o valor de euro, entre aqui //
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        // se o select estiver selecionado o valor de libra, entre aqui //
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        // se o select estiver selecionado o valor de bitcoin, entre aqui //
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    CurrencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "assets/brasil 2.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImg.src = "assets/libra 1.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bitcoin"
        currencyImg.src = "assets/bitcoin 1.png"
    }
    covertValues()

}

function changeOption() {
    const currencyBox = document.getElementById("currency-box")
    const currencyImg1 = document.querySelector(".currency-img1")

    if (currencyOption.value == "dolar") {
        currencyBox.innerHTML = "Dolar"
        currencyImg1.src = "assets/estados-unidos (1) 1.png"
    }

    if (currencyOption.value == "real") {
        currencyBox.innerHTML = "Real"
        currencyImg1.src = "assets/brasil 2.png"
    }

    if (currencyOption.value == "euro") {
        currencyBox.innerHTML = "Euro"
        currencyImg1.src = "assets/Euro.png"
    }

    if (currencyOption.value == "libra") {
        currencyBox.innerHTML = "Libra"
        currencyImg1.src = "assets/libra 1.png"
    }

    if (currencyOption.value == "bitcoin") {
        currencyBox.innerHTML = "Bitcoin"
        currencyImg1.src = "assets/bitcoin 1.png"
    }
    covertValues()
}

currencyOption.addEventListener("change", changeOption)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", covertValues)
