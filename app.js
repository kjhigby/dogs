const tabs = document.querySelector(".tabs")
const para = document.querySelector(".paragraph")
const btns = document.querySelectorAll(".btn")
const writings = document.querySelectorAll(".content")

var x = document.getElementById("myAudio");

function bear(){
    x.play();
}


tabs.addEventListener("click", (event) =>{
    const id = event.target.dataset.id;
    para.classList.add("dead");

    if(id) {
        btns.forEach((button) => {
            button.classList.remove("live");
        })
        event.target.classList.add("live");
        writings.forEach((writing) =>{
            writing.classList.remove("live");
        })
        const thing = document.getElementById(id);
        thing.classList.add("live");

    }

})