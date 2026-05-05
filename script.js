incrementBtn = document.getElementById("incrementBtn");
resetBtn = document.getElementById("resetBtn");
changeColorBtn = document.getElementById("changeColorBtn");
numberDiv = document.getElementById("numberDiv");
numberDiv.innerText = localStorage.getItem("number") || 0;

incrementBtn.addEventListener("click", ()=>{
    let num = localStorage.getItem("number")

    if (num == null){
        num = 0;
    }


    numberDiv.innerText =`${parseInt(num) + 1}`;
    localStorage.setItem("number", parseInt(num) + 1);
});

changeColorBtn.addEventListener("click", ()=>{
    document.body.style.background = "red";
});

resetBtn.addEventListener("click", ()=>{
    numberDiv.innerText = 0;
    document.body.style.background = "white";
});