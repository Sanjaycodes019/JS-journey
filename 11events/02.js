document.querySelector('#images').addEventListener("click", function(e){
    if (e.target.tagName === 'IMG'){
        console.log(e.target.id);

    let removeIt = e.target.parentNode;
    removeIt.remove();
    }
},false)