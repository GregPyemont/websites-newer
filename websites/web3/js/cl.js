document.getElementById("1").addEventListener("click", function(){
document.getElementById("1").style.display = block
document.getElementById("2").style.display = none
document.getElementById("3").style.display = none
document.getElementById("4").style.display = none
}

document.getElementById("2").addEventListener("click", function(){
document.getElementById("2").style.display = block
document.getElementById("1").style.display = none
document.getElementById("3").style.display = none
document.getElementById("4").style.display = none
}

document.getElementById("3").addEventListener("click", function(){
document.getElementById("3").style.display = block
document.getElementById("1").style.display = none
document.getElementById("2").style.display = none
document.getElementById("4").style.display = none
}

document.getElementById("4").addEventListener("click", function(){
document.getElementById("4").style.display = block
document.getElementById("1").style.display = none
document.getElementById("2").style.display = none
document.getElementById("3").style.display = none
}