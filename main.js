//create Data..//
function sendDataToLS(){
    var userData = getDataFromUser("Enter");
    if(userData != null) // 3shan el prompt sa3at mbyrg3sh kema aslan w el null msh btege
    {
        var keys = getLocalStorageKey();
        var randomNumber = Math.floor(Math.random() * 100000);
        var newKeyName = userData[0]["taskTitle"].replace(/\s/g,'');
         //key in local storage or id on div will always with no white spaces
                
            for (let index = 0; index <= keys.length; index++) {
                    localStorage.setItem(`${newKeyName + randomNumber.toString()}`, JSON.stringify(userData));
        }
        location.reload();
    }
     else{
        return;
    }
    

}


function getDataFromLsAndDisplayIt()
{    
    var localKeys = getLocalStorageKey();

        //for displaying searchContainer
    if(localKeys.length == 0){ 
        document.getElementById("searchContainer").style.display = "none";
    } else{
        document.getElementById("searchContainer").style.display = "block";
    }
        for (let index = 0; index < localKeys.length; index++) {
           

            var dataFromLS = JSON.parse(localStorage.getItem(localKeys[index]));
            
            var task = createTaskContainer();

            task.setAttribute("id",`${localKeys[index].replace(/\s/g,'')}`);
           

            // var title = dataFromLS[0]["taskTitle"];
            var title = getLocalStorageValues(dataFromLS[0]);
            var details = getLocalStorageValues(dataFromLS[1]);
            var date = getLocalStorageValues(dataFromLS[2]);
        
            createSectionContainerWithData(task,"titleSection","titleHeader","title","Name",title);
            createSectionContainerWithData(task,"detailsSection","detailsHeader","details","Description",details);
            createSectionContainerWithData(task,"createdDateSection","dateHeader","date","Created Date",date);
            createOptionsSection(task,"optionsSection","optionsHeader","Options");
        }
        
}

function edit(task,operation){
    let oldTaskId = task.getAttribute("id");
    let oldTaskData = JSON.parse(localStorage.getItem(oldTaskId));
    
    var updatedTaskData = [];
    if(operation == 0) //editName
    {
        var newTitle = getTaskTitle("Update");
        if(newTitle != null)
    {
        updatedTaskData.push({"taskTitle" : newTitle},{"taskDetails" : oldTaskData[1]["taskDetails"]},{"createdDate" :oldTaskData[2]["createdDate"]});
        var randomNumber = Math.floor(Math.random() * 999);
        var keys = getLocalStorageKey();
        for (let index = 0; index < keys.length; index++) {
        localStorage.setItem(`${newTitle.replace(/\s/g,'') + randomNumber.toString()}`,JSON.stringify(updatedTaskData));
        }
        localStorage.removeItem(oldTaskId);
    }else {
        return;
    }

    } else if(operation == 1)
    {
        var taskDetails = getTaskDetails("Update");
        if(taskDetails != null)
        {
        updatedTaskData.push({"taskTitle" : oldTaskData[0]["taskTitle"]},{"taskDetails" : taskDetails},{"createdDate" :oldTaskData[2]["createdDate"]})
        localStorage.setItem(`${oldTaskId}`, JSON.stringify(updatedTaskData));
        
        } else{
            return;
        }
    }
    location.reload();
}


function clearAll()
{
    var isOk = window.confirm("Are You Sure You Want To Clear All Tasks? ");
    if(isOk){
        localStorage.clear();
        location.reload();
    } else{
        return;
    }
}


function removeTask(task)
{   
        var taskID = task.getAttribute("id");
        localStorage.removeItem(taskID); 
        task.remove();  
}

