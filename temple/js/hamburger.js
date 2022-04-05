function toggleMenu(){
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("menubtn").classList.toggle("open");}

const y = document.getElementById('menubtn');
y.onclick = toggleMenu;