// background change 

document.getElementById('colors')
.addEventListener('click',function(){

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
  document.body.style.backgroundColor = randomColor; 
})


function updateDivCount() {
  const remainingDivs = parentDiv.querySelectorAll('div').length;
  countDisplay.textContent = `Remaining Divs: ${remainingDivs}`;
}

// TASK COunter
const parentDiv = document.getElementById('parent-div');
const ggDivs = parentDiv.childElementCount
document.getElementById('childcount').innerText =ggDivs;

// Date 
const date = document.getElementById("calender");
const newdate = new Date();
date.innerText = newdate.toDateString(); 


//btn


let count = 0;
const buttons = document.querySelectorAll('.btn'); 

buttons.forEach(button => {
  button.addEventListener("click", function () {
    button.disabled = true;
    button.style.backgroundColor = "#E2E8F0"; 
    button.style.color = "#1E293B";
    button.innerText = "Completed";
    count++;
 
   
const cl = document.getElementById('completedTask');
cl.innerText =count;

const finalCount  =ggDivs.innerText =ggDivs-count;
document.getElementById('childcount').innerText =finalCount;

if(finalCount > 0)
{
  alert("You have completed the task")
}
else{
  alert("Board Updates Succesfully")
  alert("comgrats you have completed all tasks")
}




});
});
//actitvity log 

const activityHistory = document.getElementById("history");


function logActivity(cardHeading) {

  const currentTime = new Date().toLocaleString();

  const logEntry = document.createElement("div");
  logEntry.classList.add(
    "p-2",
    "bg-gray-100",
    "rounded-md",
    "shadow-md",
    "flex",
    "justify-between",
    "gap-3"
  );
  logEntry.innerHTML = `
    <p class="text-sm font-bold">You have completed the task ${cardHeading} at ${currentTime}</p>

  `;


  activityHistory.appendChild(logEntry);
}


buttons.forEach((button) => {
  button.addEventListener("click", function () {

    const cardHeading = button
      .closest(".cards")
      .querySelector("h1")
      .innerText;

    logActivity(cardHeading);


  });
});


document.getElementById("clear").addEventListener("click", function () {
  activityHistory.innerHTML = "";
});
document.getElementById('discover').addEventListener('click', function () {
  window.location.href = 'blog.html'; 
});
