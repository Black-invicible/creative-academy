const publish = document.getElementById("publish");
publish.addEventListener("click",()=>{
const title=document.getElementById("title").value;
const content=document.getElementById("content").value;
const category=document.getElementById("category").value;
if(title===""||content===""){
alert("Please complete the form.");
return;
}
const note=document.createElement("div");
note.className="note";
note.innerHTML=`
<h2>${title}</h2>
<p>${content}</p>
<div class="footer">
<span>👤 You</span>
<span>${category}</span>
</div>
<div class="actions">
<button>❤️ 0</button>
<button>💬 0</button>
<button>📌 Pin</button>
</div>
`;
document.querySelector(".notes").prepend(note);
document.getElementById("title").value="";
document.getElementById("content").value="";
});