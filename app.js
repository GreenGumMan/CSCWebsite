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

function play(element,animationName){
    
}

let i = 0
const frame = [
    '',
    '',
    ''
]
setInterval(()=>{

})
