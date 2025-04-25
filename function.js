// Track the current background state
let isBlack = false;

// Select the button by its ID
let toggleButton = document.getElementById('chang-color');

// Select the display and calculator div
const display = document.getElementById("display");
const calculator = document.getElementById("calculator");

// Add an event listener to the button
toggleButton.addEventListener('click', () => {
    const buttons = document.querySelectorAll('#keys button'); // Select all buttons inside #keys

    if (isBlack) {
        document.body.style.backgroundColor = ''; // Reset to original background
        document.body.style.color = ''; // Reset to original text color
        display.style.backgroundColor = ''; // Reset display background
        display.style.color = ''; // Reset display text color
        calculator.style.backgroundColor = ''; // Reset calculator background

        // Reset buttons to original colors
        buttons.forEach(button => {
            button.style.backgroundColor = ''; // Reset button background color
            button.style.color = ''; // Reset button text color
        });
    } else {
        document.body.style.backgroundColor = 'black'; // Change to black
        document.body.style.color = 'white'; // Change text color to white
        display.style.backgroundColor = 'gray'; // Change display background color
        display.style.color = 'white'; // Change display text color
        calculator.style.backgroundColor = 'black'; // Change calculator background color

        // Change buttons to a new color scheme
        buttons.forEach(button => {
            button.style.backgroundColor = 'white'; // Change button background color
            button.style.color = 'black'; // Change button text color
        });
    }
    isBlack = !isBlack; // Toggle the state
});

// Function to append input to display
function appendToDisplay(input){
    display.value += input;
}

// Function to clear the display
function clearDisplay(){
    display.value = "";
}

// Function to calculate the result
function calculate(){
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

// Event listener for key presses
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check if the key is a number (0-9) or a valid operator
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } 
    // Check if the Enter key is pressed to calculate
    else if (key === 'Enter') {
        calculate();
    } 
    // Check if the Backspace key is pressed to clear the display
    else if (key === 'Backspace') {
        clearDisplay();
    }
});
