

let theinput=document.querySelector(".add-task input")
let theAddButton=document.querySelector(".add-task .plus")
let tasksContainer=document.querySelector(".tasks-content")
let theAdd=document.querySelector(".task-box")
let tasksCount=document.querySelector(".tasks-count span")
let tasksComplete=document.querySelector(".tasks-completed span")



window.onload=()=>{
    theinput.focus();
   
    if(document.querySelectorAll('.tasks-content .task-box').length==1)
        {
            createnewtasks()
        }
    let noteTasksMsg=document.querySelector(".no-tasks-message")
    
    if(document.body.contains(document.querySelector(".no-tasks-message")))
        {noteTasksMsg.remove();
        
        }
    for(let i=0;i<localStorage.length;i++)
    {
        let span=document.createElement("span")
        let DeleteSpan=document.createElement("span")
        DeleteSpan.appendChild(document.createTextNode("Delete"));
        span.className="task-box";
        DeleteSpan.className="delete";
        let key = localStorage.key(i); // اسم المفتاح

        span.appendChild(document.createTextNode(localStorage.getItem(key)));
        tasksContainer.appendChild(span);

        span.appendChild(DeleteSpan);
        count++;
    }
}
let count=0;
theAddButton.onclick=()=>{
    if(theinput.value==='')
    { 
        alert("please enter the text");

    }
      
    
    else { 


        clculateTasks()
        let noteTasksMsg=document.querySelector(".no-tasks-message")
    
if(document.body.contains(document.querySelector(".no-tasks-message")))
{noteTasksMsg.remove();

}
       
        localStorage.setItem(theinput.value,theinput.value);
        let span=document.createElement("span")
        let DeleteSpan=document.createElement("span")
        DeleteSpan.appendChild(document.createTextNode("Delete"));
        span.className="task-box";
        DeleteSpan.className="delete";
        
        span.appendChild(document.createTextNode(theinput.value));
        tasksContainer.appendChild(span);

        span.appendChild(DeleteSpan);
        count++;
    }
    theinput.value='';

}
document.addEventListener('click',(e)=>{
 
    if(e.target.className=='delete')
    {
        let message = e.target.parentElement.firstChild.textContent.trim();
        let delim = message.indexOf(">");

        if (delim !== -1) {
            // حذف من أول '>' إلى النهاية
            message = message.substring(0, delim);
        }
   console.log(message)
        localStorage.removeItem(message)
        
    e.target.parentNode.remove();/*////////////////////////////*/
    
    if(document.querySelectorAll('.tasks-content .task-box').length==0)
    {
        createnewtasks()
    }
    }
    //  check("aaa");
        if(e.target.classList.contains("task-box"))
        {
        e.target.classList.toggle("finished");/*////////////////////////////*/
        const spans = document.querySelectorAll('.task-box');
                spans.forEach((span) => {
                    // تحقق من الكلاس الخاص بالعنصر
                    if (span.classList.contains('finished')) {
                        for(let i=0;i<localStorage.length;i++)
                        { 
                            const message = span.firstChild.textContent;
                    
                        if(localStorage .key(i)==message)
                        {
                           
                            localStorage.setItem(message, message+ ">  (finished)");
                        }
                    } }
                });
            
        }
        clculateTasks()
})


function createnewtasks(){
    let msgspan =document.createElement("span")
    msgspan.appendChild(document.createTextNode("no tasks to show"));

    msgspan.className="no-tasks-message";

    tasksContainer.appendChild(msgspan)

}

function clculateTasks()
{
    tasksCount.innerHTML=document.querySelectorAll('.tasks-content .task-box').length;
    tasksComplete.innerHTML=document.querySelectorAll('.tasks-content .finished').length;
}

