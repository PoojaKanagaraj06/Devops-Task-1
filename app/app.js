const http = require("http");

const html = `
<!DOCTYPE html>
<html>
<head>
<title>Mini Calculator</title>
<style>

body{
    background:#0f172a;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    font-family:Arial;
}

.calculator{
    background:#1e293b;
    padding:20px;
    border-radius:12px;
    box-shadow:0 10px 25px rgba(0,0,0,0.4);
}

#display{
    width:100%;
    height:50px;
    font-size:22px;
    margin-bottom:10px;
    text-align:right;
    padding:5px;
    border:none;
    border-radius:6px;
}

.grid{
    display:grid;
    grid-template-columns:repeat(4,60px);
    gap:8px;
}

button{
    height:50px;
    font-size:18px;
    border:none;
    border-radius:8px;
    cursor:pointer;
    background:#334155;
    color:white;
}

button:hover{
    background:#475569;
}

.operator{
    background:#f97316;
}

.equal{
    background:#22c55e;
}

.clear{
    background:#ef4444;
}

</style>
</head>

<body>

<div class="calculator">

<input id="display" readonly>

<div class="grid">

<button onclick="press('7')">7</button>
<button onclick="press('8')">8</button>
<button onclick="press('9')">9</button>
<button class="operator" onclick="press('/')">/</button>

<button onclick="press('4')">4</button>
<button onclick="press('5')">5</button>
<button onclick="press('6')">6</button>
<button class="operator" onclick="press('*')">*</button>

<button onclick="press('1')">1</button>
<button onclick="press('2')">2</button>
<button onclick="press('3')">3</button>
<button class="operator" onclick="press('-')">-</button>

<button onclick="press('0')">0</button>
<button class="clear" onclick="clearDisplay()">C</button>
<button class="equal" onclick="calculate()">=</button>
<button class="operator" onclick="press('+')">+</button>

</div>
</div>

<script>

function press(value){
document.getElementById("display").value += value;
}

function clearDisplay(){
document.getElementById("display").value = "";
}

function calculate(){
try{
let result = eval(document.getElementById("display").value);
document.getElementById("display").value = result;
}catch{
document.getElementById("display").value = "Error";
}
}

</script>

</body>
</html>
`;

const server = http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/html"});
res.end(html);
});

server.listen(3000,()=>{
console.log("Server running at http://localhost:3000");
});
