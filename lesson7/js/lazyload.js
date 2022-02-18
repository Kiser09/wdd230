

/**Last Modified JS for the footer**/
const lastmod = document.querySelector("#lastmod");
lastmod.innerHTML = `Last date modified: ${document.lastModified}`;

const date = new Date();
let year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;