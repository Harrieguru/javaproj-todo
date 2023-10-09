//grab the html elements
const inputBox = document.querySelector('.task');
const listContainer = document.querySelector('.list');


//add task function
function addTask(){
    //check input
    if(inputBox.value === ''){
        alert('you must enter a task');
    }else{
        //create list
        const li = document.createElement("li");
        //insert the user input as li content
        li.innerHTML = inputBox.value;
        //append the li/task inside the list container
        listContainer.appendChild(li);
        //create the span tag of x(delete)
        const x = document.createElement('span');
        //append it to the task, x
        x.innerHTML = "\u00d7";
        li.appendChild(x);
    }
    //clear search after adding task
    inputBox.value = "";
    saveData();
    
}
//monitor click events
listContainer.addEventListener("click",function(e){
    //check if li has been clicked
    if(e.target.tagName === "LI")
    {
        //toggle the css
        e.target.classList.toggle("checked");
        //saves the data
        saveData();
    }
    //else if check if span has been clicked
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        //saves the data
        saveData();
    }
        //remove parent element (the task aka li)
},false)

//save data function
//show data saved
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    // Retrieve the HTML content from localStorage
    const savedData = localStorage.getItem("data");
    
    // Check if there's saved data
    if (savedData) {
        // Set the innerHTML of listContainer with the saved data
        listContainer.innerHTML = savedData;
    }
}
//show task function
showData();

//enter to add task
inputBox.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        addTask();
    }
});
