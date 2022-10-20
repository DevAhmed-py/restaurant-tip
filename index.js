function update() {
    let yourBill = document.getElementById("yourBill").value
    let tipPercent = document.getElementById("tipInput").value
    let splitNumber = document.getElementById("splitInput").value
    
    let tipValue = yourBill * (tipPercent / 100)
    let tipEach = tipValue / splitNumber
    let newBillEach = (yourBill + tipValue) / splitNumber

    document.getElementById("tipPercent").textContent = tipPercent + "%"
    document.getElementById("tipValue").textContent = `€ ${tipValue}`
}

let container = document.getElementById("container")
container.addEventListener("input", update)

