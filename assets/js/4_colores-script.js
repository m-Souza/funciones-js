const boxBlue = document.getElementById("box-blue")
const boxRed = document.getElementById("box-red")
const boxGreen = document.getElementById("box-green")
const boxYellow = document.getElementById("box-yellow")

const boxVarColor = document.getElementById("key")

function boxBlack (evt){
    evt.target.style.backgroundColor = "black"
};
function boxVar (color){
    boxVarColor.style.backgroundColor = color
};

boxBlue.addEventListener("click", boxBlack);
boxRed.addEventListener("click", boxBlack);
boxGreen.addEventListener("click", boxBlack);
boxYellow.addEventListener("click", boxBlack);


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        boxVar("pink")
    } else if (event.key === 's') {
        boxVar("orange")
    } else if (event.key === 'd') {
        boxVar("blue")
    }
    })

function agregarElemento(color) {
    contenedor = document.getElementById("contenedor");
    nuevoElemento = document.createElement("div");
    contenedor.appendChild(nuevoElemento);
    nuevoElemento.style.height = "200px"
    nuevoElemento.style.width = "200px"
    nuevoElemento.style.backgroundColor = color
};

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        agregarElemento("purple")
    } else if (event.key === 'w') {
        agregarElemento("grey")
    } else if (event.key === 'e') {
        agregarElemento("brown")
    }
})