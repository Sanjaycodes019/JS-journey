// Function to generate a random hex color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const startchangingcolor = function(){
    if (!intervalId) { // Prevent multiple intervals
        intervalId = setInterval(changebgcolor, 200);
    }
    function changebgcolor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopchangingcolor = function(){
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID to allow restarting
};

// Attach event listeners
document.querySelector("#start").addEventListener("click", startchangingcolor);
document.querySelector("#stop").addEventListener("click", stopchangingcolor);
