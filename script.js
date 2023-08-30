const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
function addTask(){
    if(inputBox.value===''){
        //show alert if nothing is added
        alert("You must write something!");
    }
    else{
        //create a li element if something is entered inside the input-box
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);//add the list to the ul element
        // creating a span to indicate the "X" mark at the end of the list
        let span = document.createElement("span");
        span.innerHTML="\u00d7 "
        li.appendChild(span);
    }
    //reseting the input-box values
    inputBox.value='';
    //funtion to retrive the list items even after reloading
    saveData();
}
//adding a eventlistener on clicking the list items
listContainer.addEventListener("click",function(e){
    //target is used to check the clicked area and tagname is used to select the clicked item 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false
);
// funtion for saving the data even after raloding
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();
//this fuction is to take input to li after presing the enter button also
inputBox.addEventListener("keypress", function(event){
    //check if key pressed is enter spelling is crucial
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
})