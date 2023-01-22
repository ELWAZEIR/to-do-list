function alertUser(task)
{
    let userTimeInput = getAlertTimer();
    if (userTimeInput != null) {
        let convertedTime = userTimeInput * 1000;
        let newTime = userTimeInput;
        //time
    
        let audio = createAudio(); 
        //audio 
        let alertBox = document.getElementById("modal");
        let counterDiv = document.createElement("div");
        //timer display
        task.appendChild(counterDiv);
        let interval = setInterval(() => {
            counterDiv.innerHTML = `${newTime}`;
            newTime -= 1;}, 1000);
    
    
        setTimeout(() => {
            clearInterval(interval);
            counterDiv.innerHTML = "";
            audio.play();
            alertBox.style.display = "flex";
            let yesBtn = document.getElementById("yesBtn")
            yesBtn.addEventListener("click",()=>{
                audio.pause();
                audio.currentTime = 0;
                var taskId = task.getAttribute("id");
                localStorage.removeItem(taskId);
                task.remove();
                alertBox.style.display = "none";
    
            })
            let noBtn = document.getElementById("noBtn")
            noBtn.addEventListener("click",()=>{
                audio.pause();
                audio.currentTime = 0;
                alertBox.style.display = "none";
                return;
            });
           
        }, convertedTime);
        
    } else{
        return;
    }
        

   
    
}