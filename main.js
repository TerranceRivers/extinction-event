let listItems1 = document.querySelectorAll("#firstList li");
for (let i = 0; i < listItems1.length; i++) {
  listItems1[i].addEventListener("click", function () {
    listItems1[i].style.textDecoration = "line-through";
  });
}

let listItems2 = document.querySelectorAll("#secondList li");
for (let i = 0; i < listItems2.length; i++) {
  listItems2[i].addEventListener("click", function () {
    listItems2[i].style.opacity = "0";
  });
}

let imgItems = document.querySelectorAll("#row img");
for (let i = 0; i < imgItems.length; i++) {
  imgItems[i].addEventListener("click", function () {
    imgItems[i].style.width = "0px";
  });
}
let button = document.querySelector("#destroy-all");
button.addEventListener("click", function(){
    burn()
});



function burn() {
  for (let i = 0; i < listItems1.length; i++) {
      listItems1[i].style.textDecoration = "line-through";
    };
  for (let i = 0; i < listItems2.length; i++) {
      listItems2[i].style.opacity = "0";
    };
  for (let i = 0; i < imgItems.length; i++) {
      imgItems[i].style.width = "0px";
    };
  }

