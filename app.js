// Calling the "submitEventListener" to initiate our code when the submit button is clicked
submitEventListener();

// Function responsible for assigning the onclick event listener on the submit button
// When the submit button is clicked we call the makeGrid function which is responsible for creating the main grid
function submitEventListener() {

    var submit = document.querySelectorAll("input[type=submit]")[0];
    submit.onclick = function(e) {
        e.preventDefault();
        makeGrid();
    };
}

// cellsEventListener is responsible for finding all td elements of our table and assigning an event listener on click
// When a td element is click it changes the background css of the clicked cell by first retrieving the current color picker value 
// by callling the getColorPickerValue function
function cellsEventListener() {
    var grid_canvas = document.getElementById("pixelCanvas");
    const cells = grid_canvas.querySelectorAll('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function(e) {
            this.style.background = getColorPickerValue();
        });
    }
}

// getColorPickerValue returns the current value of the colorpicker input
function getColorPickerValue() {
    var colorpicker = document.getElementById("colorPicker");
    return colorpicker.value;
}

// makeGrid function is responsible for creating the main table when the submit button is clicked
// Based on the values provided for the input height and height, it created the appropriate number of <tr> and <td> elements
// Based on the width provided value we create the same number of <tr> elements and based on the provided height value we create the same number of <td> elements
// Finally we add the created HTML string to the innerHTML of our table and call the cellsEventListener function which is responsible for assigning the onclick event on the <td> elements
function makeGrid() {

    var grid_canvas = document.getElementById("pixelCanvas");
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;

    var grid_canvasHTML = '';

    for (var i = 0; i < width; i++) {
        grid_canvasHTML += '<tr>';
        for (var k = 0; k < height; k++) {
            grid_canvasHTML += '<td></td>';
        }
        grid_canvasHTML += '</tr>';
    }

    grid_canvas.innerHTML = grid_canvasHTML;
    cellsEventListener();

}