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
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});