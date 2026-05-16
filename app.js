const buts = document.querySelectorAll(".but")

console.log(buts)

buts.forEach(but => {
    console.log("element!")
    but.addEventListener("mouseenter",()=>{
        const match = but.textContent.match(/\[(.*?)\]/)
        const result = match ? match[1] : null
        if(result){
            but.textContent = "[ " + result + " ]"
        }
    })
    but.addEventListener("mouseleave",()=>{
        const match = but.textContent.match(/\[ (.*?) \]/)
        const result = match ? match[1] : null
        if(result){
            but.textContent = "[" + result + "]"
        }
    })
})

function StartPlay(element,animationName){
    fetch("anim.json")
    .then(res => res.json())
    .then(data => {
        const frames = data[animationName];
        const interval = 100;

        let i = 0;
        setInterval(() => {
            element.textContent = frames[i];
            i = (i+1)%10;
        }, interval);
    })
}

const logoani = document.getElementById("logoani");
