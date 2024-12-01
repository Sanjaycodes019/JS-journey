const sayDate = function(str){
    console.log(str, Date.now());
}
setInterval(sayDate, 2000, "hello");

const intervalid = clearInterval(sayDate, 1000, "hi")
clearInterval(intervalid);

//have to try much on this project

