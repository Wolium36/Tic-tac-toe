var round=0;
var match=0;  
var mesh=new Array('-','-','-','-','-','-','-','-','-');

var winsX=0;
var winsO=0;

document.getElementById("x").style.boxShadow="0px 0px 19px 0px rgba(255, 255, 255, 1)";

function reset(){
  document.getElementById("after").innerHTML="";
  round=0;
  match++;
  
  if(match%2==0){
    document.getElementById("x").style.boxShadow="0px 0px 19px 0px rgba(255, 255, 255, 1)";
  }else{
    document.getElementById("o").style.boxShadow="0px 0px 19px 0px rgba(255, 255, 255, 1)";
  }
  
  for(var i=0; i<9; i++){
    mesh[i]='-';
    document.getElementById("s"+(i)).innerHTML = "";
  }
}

function afterGame(){
  document.getElementById("after").innerHTML='<div class="background">'+
                                              '<button id="newGame">new game</button>'
                                             '</div>';
  
  const btnNewGame = document.getElementById("newGame");
  btnNewGame.addEventListener("click", function(){reset()});

}

function checkWin(n){
  if((mesh[0]==mesh[1] && mesh[1]==mesh[2] && mesh[0]!='-') ||
     (mesh[3]==mesh[4] && mesh[4]==mesh[5] && mesh[3]!='-') ||
     (mesh[6]==mesh[7] && mesh[7]==mesh[8] && mesh[6]!='-') ||
     (mesh[0]==mesh[3] && mesh[3]==mesh[6] && mesh[0]!='-') ||
     (mesh[1]==mesh[4] && mesh[4]==mesh[7] && mesh[1]!='-') ||
     (mesh[2]==mesh[5] && mesh[5]==mesh[8] && mesh[2]!='-') ||
     (mesh[0]==mesh[4] && mesh[4]==mesh[8] && mesh[0]!='-') ||
     (mesh[2]==mesh[4] && mesh[4]==mesh[6] && mesh[2]!='-')){
    if(mesh[n]=='x'){
      winsX++;
      if(winsX>0){
        document.getElementById("winsX").innerHTML=winsX; 
      }
      afterGame();
    }else if(mesh[n]=='o'){
      winsO++;
      if(winsO>0){
        document.getElementById("winsO").innerHTML=winsO; 
      }
    }
    document.getElementById("x").style.boxShadow="0px 0px 0px 0px rgba(255, 255, 255, 1)";
    document.getElementById("o").style.boxShadow="0px 0px 0px 0px rgba(255, 255, 255, 1)";
    afterGame();
  }else if(round==9){
    document.getElementById("x").style.boxShadow="0px 0px 0px 0px rgba(255, 255, 255, 1)";
    document.getElementById("o").style.boxShadow="0px 0px 0px 0px rgba(255, 255, 255, 1)";
    afterGame()
  }
}

function checkMesh(n,s){
  if(mesh[n]=='-'){
    if((match%2==0 && round%2==0) || (match%2==1 && round%2==1)){
      document.getElementById("x").style.boxShadow="0px 0px 0px 0px rgba(255, 255, 255, 1)";
      document.getElementById("o").style.boxShadow="0px 0px 19px 0px rgba(255, 255, 255, 1)";
      document.getElementById(s).innerHTML = '<div class="crossL"></div><div class="crossR"></div>';
      mesh[n]='x';
    }else{
      document.getElementById("o").style.boxShadow="0px 0px 0px 0px rgba(255, 255, 255, 1)";
      document.getElementById("x").style.boxShadow="0px 0px 19px 0px rgba(255, 255, 255, 1)";
      document.getElementById(s).innerHTML = '<div class="circle"></div>';
      mesh[n]='o';
    }
    round++;
    checkWin(n);
  }
}

const btn0 = document.getElementById("s0");
btn0.addEventListener("click", function(){checkMesh(0,"s0")});
const btn1 = document.getElementById("s1");
btn1.addEventListener("click", function(){checkMesh(1,"s1")});
const btn2 = document.getElementById("s2");
btn2.addEventListener("click", function(){checkMesh(2,"s2")});
const btn3 = document.getElementById("s3");
btn3.addEventListener("click", function(){checkMesh(3,"s3")});
const btn4 = document.getElementById("s4");
btn4.addEventListener("click", function(){checkMesh(4,"s4")});
const btn5 = document.getElementById("s5");
btn5.addEventListener("click", function(){checkMesh(5,"s5")});
const btn6 = document.getElementById("s6");
btn6.addEventListener("click", function(){checkMesh(6,"s6")});
const btn7 = document.getElementById("s7");
btn7.addEventListener("click", function(){checkMesh(7,"s7")});
const btn8 = document.getElementById("s8");
btn8.addEventListener("click", function(){checkMesh(8,"s8")});
