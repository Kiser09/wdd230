const favchap = document.querySelector("#favchap");
const button = document.querySelector("button");
const userlist = document.querySelector("#userlist");


button.addEventListener("click", function(){
// get the favchap
    let list = favchap.value;
    favchap.value = '';
// build html
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
// output to DOM
    listItem.appendChild(listText);
    listText.textContent = list;
    listItem.appendChild(listBtn);
    listBtn.textContent = "X";
    userlist.appendChild(listItem);

    listBtn.onclick = function() {
        userlist.removeChild(listItem);
    }

    favchap.focus();
})
