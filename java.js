for (let i = 0; i < 32; i++) {
    var div =  document.createElement("div");
    div.classList.add("blocks");
    div.textContent = "div";
    div.style.color = "blue";
    div.style.width = "250px";
    div.style.height = "250px";
    div.style.justifyContent = "centre";
    container.appendChild(div);
};