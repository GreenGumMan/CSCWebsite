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

const logo = document.getElementById("logoani");

StartPlay(logo,"logo")