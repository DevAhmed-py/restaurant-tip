function update() {
    let yourBill = document.getElementById("yourBill").value
    let tipInput = document.getElementById("tipInput").value
    let splitInput = document.getElementById("splitInput").value
}

let container = document.getElementById("container")
container.addEventListener("input", update)