var tura=0;
var oczka=new Array('-','-','-','-','-','-','-','-','-');

function sprawdzWygrana(t){
  if(oczka[0]==oczka[1] && oczka[1]==oczka[2]){
    if(oczka[0]=='x'){
      console.log('x wygrywa');
    }else if(oczka[0]=='o'){
      console.log('o wygrywa');
    }
  }
}

function sprawdzOczko(n,k){
  if(tura%2==0){
    document.getElementById(k).innerHTML = '<div class="krzyzL"></div><div class="krzyzR"></div>';
    oczka[n]='x';
  }else{
    document.getElementById(k).innerHTML = '<div class="kolo"></div>';
    oczka[n]='o';
  }
  tura++;
  sprawdzWygrana(tura);
}

function gra(kwadrat){
  if(kwadrat=="k1"){
    if(oczka[0]=='-'){
      sprawdzOczko(0,"k1");
    }
  }  
  if(kwadrat=="k2"){
    if(oczka[1]=='-'){
      sprawdzOczko(1,"k2");
    }
  }  
  if(kwadrat=="k3"){
    if(oczka[2]=='-'){
      sprawdzOczko(2,"k3");
    }
  }  
  if(kwadrat=="k4"){
    if(oczka[3]=='-'){
      sprawdzOczko(3,"k4");
    }
  }  
  if(kwadrat=="k5"){
    if(oczka[4]=='-'){
      sprawdzOczko(4,"k5");
    }
  }  
  if(kwadrat=="k6"){
    if(oczka[5]=='-'){
      sprawdzOczko(5,"k6");
    }
  }  
  if(kwadrat=="k7"){
    if(oczka[6]=='-'){
      sprawdzOczko(6,"k7");
    }
  }  
  if(kwadrat=="k8"){
    if(oczka[7]=='-'){
      sprawdzOczko(7,"k8");
    }
  }  
  if(kwadrat=="k9"){
    if(oczka[8]=='-'){
      sprawdzOczko(8,"k9");
    }
  }  
}

const btn1 = document.getElementById("k1");
btn1.addEventListener("click", function(){gra("k1")});
const btn2 = document.getElementById("k2");
btn2.addEventListener("click", function(){gra("k2")});
const btn3 = document.getElementById("k3");
btn3.addEventListener("click", function(){gra("k3")});
const btn4 = document.getElementById("k4");
btn4.addEventListener("click", function(){gra("k4")});
const btn5 = document.getElementById("k5");
btn5.addEventListener("click", function(){gra("k5")});
const btn6 = document.getElementById("k6");
btn6.addEventListener("click", function(){gra("k6")});
const btn7 = document.getElementById("k7");
btn7.addEventListener("click", function(){gra("k7")});
const btn8 = document.getElementById("k8");
btn8.addEventListener("click", function(){gra("k8")});
const btn9 = document.getElementById("k9");
btn9.addEventListener("click", function(){gra("k9")});
