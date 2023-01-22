function getLocalStorageValues (valueName)
{
    return Object.values(valueName).toString();
}


function getLocalStorageKey()
{
    return Object.keys(localStorage);
}

function getTaskTitle(str)
{
    var taskTitle = prompt(`${str} Name`,"");
   
        return taskTitle;
    
    
}

function getTaskDetails(str)
{
    var taskDetails = prompt(`${str} Details`,"");
        return taskDetails;
 
}

function getCreatedDateAsString()
{
    var date = new Date();
    return date.toLocaleTimeString();
}

function getDataFromUser(str)
{
    // get data from prompt .. ignore function from cancel button .. create data in object
    var taskTitle = getTaskTitle(str);
    if(taskTitle == null || taskTitle == ""){
        return;
    }
    var taskDetails = getTaskDetails(str);
    if(taskDetails == null || taskDetails == ""){
        return;
    }
    var concatDate = getCreatedDateAsString();
    var inputData = [{"taskTitle" : taskTitle}, {"taskDetails" : taskDetails},{"createdDate" : concatDate},{"color" : ""}];
    return inputData;
}

/////////////////////////////////
//newFeaturesFunctions
function getAlertTimer()
{
    let time = prompt(`please note
     You cannot use timer alert without keeping your browser open
        please add when to alert you in number of seconds
    `);
    if(time == null || time == "" || time == " "){
        return null;
    } else{
        return time;
    }
}