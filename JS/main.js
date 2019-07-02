var input=document.getElementById("inputformat");

function changeBold(){
    if(input.style.fontWeight=="normal")
    {input.style.fontWeight="bold"}
    else{input.style.fontWeight="normal"}
}
function changeItalic(){
    if(input.style.fontStyle=="normal")
    {input.style.fontStyle="italic"}
    else{input.style.fontStyle="normal"}
}
 
function changeunderline(){
    if(input.style.textDecoration=="none")
    {input.style.textDecoration="underline"}
    else{input.style.textDecoration="none"}
}
function changefontsize(){
    var size=document.getElementById("idsize").value;
    input.style.fontSize=size;
}
function changefontstyle(){
    var style=document.getElementById("idstyle").value;
    input.style.fontFamily=style;
}