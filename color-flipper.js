

function changeColorg(){
  document.body.style.backgroundColor = "rgb(23, 151, 23)";
}

function changeColorr(){
  document.body.style.backgroundColor = "rgb(248, 30, 30)";
}

function changeColorb(){
  document.body.style.backgroundColor = "blue";
}
function random(){
  let color;
  color=Math.floor(Math.floor(Math.random()*16777215)).toString(16);
  document.body.style.backgroundColor = "#"+ color;
} 
