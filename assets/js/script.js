const ele = document.getElementById("ele1")
const boxColors = document.getElementById("box-blue")

function pintar(color="green"){
    ele.style.backgroundColor = color
}

ele.addEventListener("click", () => pintar("yellow"));

function pintarBox(color="green"){
    boxColors.style.backgroundColor = color
}

boxColors.addEventListener("click", () => pintarBox("yellow"));

