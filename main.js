let listItems1 = document.querySelectorAll("#firstList li");
listItems1.forEach(function (item) {
  item.addEventListener("click", function () {
    item.style.textDecoration = "line-through";
  });
});


let listItems2 = document.querySelectorAll("#secondList li");
listItems2.forEach(function (item){
  item.addEventListener("click", function () {
    item.style.opacity = "0";})
})


let imgItems = document.querySelectorAll("#row img");
imgItems.forEach(function (item){
  item.addEventListener("click", function () {
    item.style.width = "0px"})
})


let button = document.querySelector("#destroy-all");
button.addEventListener("click", function () {
  burn();
});

function burn() {
  listItems1.forEach(function (item){
    item.style.textDecoration = "line-through"
  })

  listItems2.forEach(function (item) {
    item.style.opacity = "0";
  })

  imgItems.forEach(function (item){
    item.style.width = "0px";
  })
}

