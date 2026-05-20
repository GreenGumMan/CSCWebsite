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
        const interval = 150;

        let i = 0;
        setInterval(() => {
            element.textContent = frames[i];
            i = (i+1)%10;
        }, interval);
    })
}

const logoani = document.getElementById("logoani");
console.log("hello world")
StartPlay(logoani,"logo")

const shinput = document.getElementById("shinputbox");
const shoutput = document.getElementById("shoutput");


let commmand_informations = {};
fetch("command_information.json")
    .then(res => res.json())
    .then(data =>{
        console.log("successful got!")
        commmand_informations = data;
        console.log(commmand_informations)
    })

let memberlist = [];
fetch("members.json")
    .then(res => res.json())
    .then(data=>{
        memberlist = data;
    })

shinput.addEventListener("keydown",(e)=>{
    console.log(e.key)
    if(e.key == "Enter"){
        const value = shinput.value;
        let output;
        switch(value){
            case "help":
                output = "NAME".padEnd(15)+"MEANING\n";
                for(let key in commmand_informations){
                    output+=commmand_informations[key][0].padEnd(15);
                    output+=commmand_informations[key][1];
                    output+="\n";
                }
                shoutput.textContent = output;
                break;
            case "clear":
                shoutput.textContent = "";
                break;
            case "ls-member":
                output = "NAME".padEnd(15)+"DUTY".padEnd(15)+"CLASS\n";
                for(let i=0;i<memberlist.length;i++){
                    output+=memberlist[i][0].padEnd(15);
                    output+=memberlist[i][1].padEnd(15);
                    output+=memberlist[i][2];
                    output+="\n";
                }
                shoutput.textContent = output;
                break;
            default:
                shoutput.textContent = "Unknown Command: "+value;
                break;
        }
        shinput.value = "";
    }
})