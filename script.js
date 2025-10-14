function appendValue(value) {
    const display = document.getElementById('display');
    const last = display.value.slice(-1);
    const ops = '+-*/';
    
    // Cegah operator berturut-turut
    if (ops.includes(value) && ops.includes(last)) return;
    
    // Cegah titik/koma berlebihan di angka yang sama
    if (value === '.') {
        const parts = display.value.split(/[\+\-\*\/]/);
        const lastNum = parts[parts.length - 1];
        if (lastNum.includes('.')) return;
    }
    
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "ERROR";
    }
}