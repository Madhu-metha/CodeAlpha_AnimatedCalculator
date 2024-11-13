const display = document.getElementById('display');
const calculatorSection = document.getElementById('calculator-section');
const calculator = document.querySelector('.calculator');
let activeTimeout;

function showCalculator() {
    calculatorSection.style.display = 'flex';
    window.scrollTo({
        top: calculatorSection.offsetTop,
        behavior: 'smooth'
    });
}

function appendNumber(number) {
    activateCalculator();
    display.value += number;
}

function appendOperator(operator) {
    activateCalculator();
    display.value += ` ${operator} `;
}

function calculate() {
    activateCalculator();
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    activateCalculator();
    display.value = '';
}

function backspace() {
    activateCalculator();
    display.value = display.value.slice(0, -1);
}

function activateCalculator() {
    // Add active class to temporarily disable 3D effects
    calculator.classList.add('active');
    // Clear any existing timeout to avoid immediate re-enabling
    clearTimeout(activeTimeout);
    // Set timeout to remove active class after inactivity (1.5 seconds)
    activeTimeout = setTimeout(() => {
        calculator.classList.remove('active');
    }, 1500);
}
