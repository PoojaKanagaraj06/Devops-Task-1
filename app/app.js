// Create Calculator UI
document.body.innerHTML = `
<div style="width:220px;margin:100px auto;text-align:center;font-family:Arial">
    <h3>Mini Calculator</h3>
    <input id="display" type="text" readonly 
        style="width:200px;height:30px;margin-bottom:10px;text-align:right;font-size:18px"/>

    <div>
        <button onclick="press('7')">7</button>
        <button onclick="press('8')">8</button>
        <button onclick="press('9')">9</button>
        <button onclick="press('/')">/</button>
    </div>

    <div>
        <button onclick="press('4')">4</button>
        <button onclick="press('5')">5</button>
        <button onclick="press('6')">6</button>
        <button onclick="press('*')">*</button>
    </div>

    <div>
        <button onclick="press('1')">1</button>
        <button onclick="press('2')">2</button>
        <button onclick="press('3')">3</button>
        <button onclick="press('-')">-</button>
    </div>

    <div>
        <button onclick="press('0')">0</button>
        <button onclick="clearDisplay()">C</button>
        <button onclick="calculate()">=</button>
        <button onclick="press('+')">+</button>
    </div>
</div>
`;

// Functions
function press(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}
