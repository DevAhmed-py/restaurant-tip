let yourBill = document.getElementById("yourBill")
let tipInput = document.getElementById("tipInput")
let splitInput = document.getElementById("splitInput")

yourBill.addEventListener("input", function(e) {
    console.log(e.target.value)
})

tipInput.addEventListener("input", function(e) {
    console.log(e.target.value)
})

splitInput.addEventListener("input", function(e) {
    console.log(e.target.value)
})

