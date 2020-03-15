let colorOne = document.getElementById("colorOne");
let colorTwo = document.getElementById("colorTwo");
let showData = document.getElementById("showData");
let bodybg = document.getElementById("bodybg");
let copy = document.getElementById("copyBtn");



function bodybgColor(){
    
    bodybg.style.background=`linear-gradient(to right,${colorOne.value}, ${colorTwo.value})`;
    
    showData.textContent=`linear-gradient(to right,${colorOne.value}, ${colorTwo.value})`;
    
}


colorOne.addEventListener("input",bodybgColor);
colorTwo.addEventListener("input",bodybgColor);



function myfun(){
    
    var range = document.createRange();
    range.selectNode(showData);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    swal("Copy!", "Successfull", "success");

}
