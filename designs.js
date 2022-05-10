// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const customHeight = document.getElementById("inputHeight").value;
const customWidth = document.getElementById("inputWidth").value;
const table = document.getElementById("pixelCanvas");
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("click", function(event) {
// Prevent the browser from resetting to the original page
// on submission of table size dimensions
    event.preventDefault();
    let customHeight = document.getElementById("inputHeight");
    let customWidth = document.getElementById("inputWidth");
    makeGrid(customHeight, customWidth);
})
// Define the makeGrid() function, including looping over the values
// up until the user-entered table size dimensions
function makeGrid(customHeight, customWidth) {
    table.innerHTML = "";
    for (let x = 0; x < customHeight.value; x++) {
        let row = table.insertRow(x);
        for (let y = 0; y < customWidth.value; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener("click", function(event) {
// Check if a cell is colored and remove any color on second click
// If/else code below suggested by Udacity mentor TEHA on 4/20 in reply
// to post by Alice B "remove colors"
            if(event.target.style.backgroundColor)
                event.target.style.removeProperty('background-color');
            else
                event.target.style.backgroundColor = color.value;
            })
        }
    }
}