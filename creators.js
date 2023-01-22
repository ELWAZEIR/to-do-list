function createTaskContainer(){
    var task = document.createElement("div");
    task.classList.add("task");
    document.getElementById("allTasks").appendChild(task);
    return task;
}


function createSectionContainerWithData(appendedTask,sectionClassName,headerClassName,detailsClassName,headerText,detailsText)
{
    var section = document.createElement("section");
    section.classList.add(sectionClassName);
    appendedTask.appendChild(section);


    var header = document.createElement("div");
    header.classList.add(headerClassName);
    header.innerText = headerText; //or
    //var textNode = document.createTextNode(headerText);
    // header.appendChild(textNode);

    var details = document.createElement("p");
    details.classList.add(detailsClassName);
    details.innerText = detailsText;

    section.appendChild(header);
    section.appendChild(details);
}



function createOptionsSection(appendedTask,sectionClassName,headerClassName,headerText)
{
    var section = document.createElement("section");
    section.classList.add(sectionClassName);
    appendedTask.appendChild(section);


    var header = document.createElement("div");
    header.classList.add(headerClassName);
    header.innerText = headerText;



    var icon1 = document.createElement("i");
    icon1.setAttribute("title","DELETE");
    icon1.setAttribute("class","fa fa-trash");
    icon1.setAttribute("id", "delete");

    icon1.addEventListener("click",function () {
        
        var isOk = window.confirm("Are You Sure You Want To Delete ?");
        if(isOk){
            removeTask(appendedTask);
        }else{
            return;
        }
    } );



    var icon2 = document.createElement("i");
    icon2.setAttribute("title","Edit Details");
    icon2.setAttribute("id","editDetails");
    icon2.setAttribute("class","fa fa-edit");
    icon2.addEventListener("click",()=> edit(appendedTask,1));

    var icon3 = document.createElement("i")
    icon3.setAttribute("title","Edit Name");
    icon3.setAttribute("id","editTitle");
    icon3.setAttribute("class","fa fa-wrench");
    icon3.addEventListener("click",()=> edit(appendedTask,0));


    var icon4 = document.createElement("i")
    icon4.setAttribute("title","Set Timer");
    icon4.setAttribute("id","setTimer");
    icon4.setAttribute("class","fa fa-clock-o");
    icon4.addEventListener("click",()=> alertUser(appendedTask));

    section.appendChild(header);
    section.appendChild(icon1);
    section.appendChild(icon2);
    section.appendChild(icon3);
    section.appendChild(icon4);

}
///////////////////////////////////
//newFeatures Creators
function createAudio()
{
    let audio = document.createElement("audio");
    audio.setAttribute("id","audio");
    audio.style.display= "none";
    audio.innerHTML = `<source src="assets/ring.wav">`
    document.body.appendChild(audio);
    return audio;
}
//////////////////////////////