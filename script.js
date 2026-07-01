const portfolioOwner = "Isaac";
function welcomeMessage() {
    console.log("Welcome to the console, " + portfolioOwner + "!");
    alert("Hello! Welcome to my JavaScript interactive portfolio!");
}
welcomeMessage();
const mainHeading = document.querySelector("h1");
mainHeading.addEventListener("click", function() {
    mainHeading.style.color = "crimson";
    mainHeading.innerHTML = "You Clicked Me!";
});

const themeButton = document.querySelector("#mode-btn");
themeButton.addEventListener("click", function() {
    if (document.body.style.backgroundColor === "white" || document.body.style.backgroundColor === "") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        themeButton.innerHTML = "Light Mode";
    } else {
    
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        themeButton.innerHTML = "Dark Mode";
    }
    
});
const savedGoals = localStorage.getItem("myPersistentGoals");
const goalsArray = savedGoals ? JSON.parse(savedGoals) : [
    "Master HTML & CSS layouts perfectly",
    "Learn how to use JavaScript for interactivity",
    "Deploy a live portfolio site to the web"
];
const goalsList = document.querySelector("#dynamic-goals-list");
const goalInput = document.querySelector("#goal-input");
const addButton = document.querySelector("#add-btn");
function renderGoals() {
    goalsList.innerHTML = "";
    goalsArray.forEach(function(goalText) {
        const newListItem = document.createElement("li");
        newListItem.innerHTML = goalText;
        goalsList.appendChild(newListItem);
    });
}
renderGoals();
addButton.addEventListener("click", function() {
    const userValue = goalInput.value;
    if (userValue !== "") {
        goalsArray.push(userValue);
        localStorage.setItem("myPersistentGoals", JSON.stringify(goalsArray));
        renderGoals();
        goalInput.value = "";
    } else {
        alert("Please type a goal first!");
    }
});