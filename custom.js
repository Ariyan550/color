const bcolors =["blue","hotpink","rgb(107, 92, 205)","#833471","#006266","#ED4C67"];
const ncolors =["a29bfe","#74b9ff","#6c5ce7","#0984e3","#e84393","#ff7675","#00b894","#2d3436","#00cec9"];
const tcolors =["white","black","yellow","blue","hotpink"];


const btn =document.getElementById("btn");
const color=document.getElementById("color");
const nav =document.getElementById("nav-bar");
const mainBody=document.getElementById("main");
const btnTwo =document.getElementById("btn-two");
const btnText=document.getElementById("btn-text");
const textColor=document.getElementById("bodyText");

btn.addEventListener("click", ()=>{
const randomNumber =getrandomNumber();
mainBody.style.backgroundColor=bcolors[randomNumber];
color.textContent=bcolors[randomNumber];
});


const getrandomNumber = ()=>{
return Math.floor(Math.random() *bcolors.length);
}


btnTwo.addEventListener("click", ()=>{
const navrandomColor=navRandom();
nav.style.backgroundColor = ncolors[navrandomColor];
});

const navRandom =()=>{
	return Math.trunc(Math.random() *ncolors.length);
}




btnText.addEventListener("click", ()=>{
const Tcrandom =textRandom();
textColor.style.color =tcolors[Tcrandom];
});


const textRandom = ()=>{
return Math.trunc(Math.random()*tcolors.length);
}