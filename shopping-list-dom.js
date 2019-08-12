// shopping-list dom code here
var chooseElement = document.querySelector(".choose");
var budgetElement = document.querySelector(".budget");
var addBtnElement = document.querySelector(".addBtn");
var warningLevelElement = document.querySelector(".warning");
var budgetAmountElement = document.querySelector(".budgetAmount");


function shopping(){
    var warn = 0;
    if(warn < warningLevelElement.value){
        budgetAmountElement.classList.add("warning");
    }
    // budgetElement.innerHTML = ""

    var li = document.createElement("li");
    var item = document.createTextNode(inputValue);
    li.appendChild(item);
    document.getElementById("myUL").appendChild(li);

}
addBtnElement.addEventListener('click', shopping);