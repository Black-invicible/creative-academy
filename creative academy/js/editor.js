function format(command){
document.execCommand(command,false,null);
}
function insertDate(){
const date = new Date().toLocaleDateString();
document.execCommand(
"insertText",
false,
date
);
}
// Auto Save
setInterval(()=>{
localStorage.setItem(
"creativeAcademyDraft",
document.querySelector(".text-editor").innerHTML
);
},3000);
// Load Draft
window.onload=()=>{
const saved=localStorage.getItem(
"creativeAcademyDraft"
);
if(saved){
document.querySelector(".text-editor").innerHTML=saved;
}
}