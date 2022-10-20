function formatSplit(value) {
    if (value == 1) {
        return value + " person"
    } else {
        return value + " people"
    }
}

function formatBill(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return `€ ${value}`
}

function update() {
    let yourBill = Number(document.getElementById("yourBill").value)
    let tipPercent = document.getElementById("tipInput").value
    let splitNumber = document.getElementById("splitInput").value
    
    let tipValue = yourBill * (tipPercent / 100)
    let tipEach = tipValue / splitNumber
    let billEach = (yourBill + tipValue) / splitNumber
    let totalBill = yourBill + tipValue

    document.getElementById("tipPercent").textContent = tipPercent + "%"
    document.getElementById("tipValue").textContent = formatBill(tipValue)
    document.getElementById("totalWithTip").textContent = formatBill(totalBill)
    document.getElementById("splitValue").textContent = formatSplit(splitNumber)
    document.getElementById("billPerPerson").textContent = formatBill(billEach)
    document.getElementById("tipPerPerson").textContent = formatBill(tipEach)
}

let container = document.getElementById("container")
container.addEventListener("input", update)
