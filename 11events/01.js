document.getElementById('owl').onclick = function(){
    alert("owl clicked");
}

//attach event()
//jQuery - on event

/*
TO STUDY
type
timestamp
default pevented
target
toelement
source element
current target
clientx, clienty
screenx, screeny
altkey, ctrl key, shiftkey, keycode

*/


document.getElementById("images").addEventListener("click", function(e){
    console.log("clicked inside the ul!");
},false)

document.getElementById("owl").addEventListener("click", function(e){
    console.log("owl clicked!");
    e.stopPropagation();
},false)


document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google is clicked!");

},false)
//event propagation

/*



*/
