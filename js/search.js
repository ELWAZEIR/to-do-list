function search()
{
    let value = document.getElementById("search").value;
    if(value != ""){
        document.getElementById("search").style.border ='1px solid #ff7b00';
        localKeys =Object.keys(localStorage);
        let arrOfKeys = [];
        
        localKeys.forEach(element => {
            arrOfKeys.push(element);
        });

            document.getElementById("allTasks").innerHTML = "";
            for (let index = 0; index < arrOfKeys.length; index++) {
                if(arrOfKeys[index].includes(value)){
                    
                    
                    var task = createTaskContainer();
                    var dataFromLS = JSON.parse(localStorage.getItem(arrOfKeys[index]));
                    task.setAttribute("id",`${arrOfKeys[index].replace(/\s/g,'')}`);
        
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


    } else{
        document.getElementById("search").style.border ='2px solid red';
        document.getElementById("allTasks").innerHTML = "";
        getDataFromLsAndDisplayIt();
        
    }

    
       
    }