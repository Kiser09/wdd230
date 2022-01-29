const x = new Date();
const time = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.getElementById('currentdate').innerHTML = x.toLocaleString('en-us', time)

/*Date last modified JavaScript*/
const lastmod = document.querySelector("#lastmod");
lastmod.innerHTML = `Last date modified: ${document.lastModified}`;

/*Current year displayed in the footer*/
const date = new Date();
let year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;