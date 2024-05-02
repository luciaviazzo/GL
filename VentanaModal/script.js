const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", function(){
    modal.style.display = "block";
    return false;
});

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
});