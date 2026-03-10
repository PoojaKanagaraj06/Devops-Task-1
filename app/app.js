const http = require("http");

const html = `
<!DOCTYPE html>
<html>
<head>
<title>Mini Calculator</title>
<style>
body{font-family:Arial;text-align:center;margin-top:100px}
button{width:40px;height:40px;margin:3px;font-size:16px}
#display{width:180px;height:30px;font-size:18px;text-align:right;margin-bottom:10px}
</style>
</head>
<body>

<h3>Mini Calculator</h3>

<input id="display" type="text" readonly>

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
