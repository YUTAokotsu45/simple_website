const btn = document.getElementById("menu_btn");
const nav = document.getElementById("nav");

btn.onclick = () => {
    nav.classList.toggle("active");
};