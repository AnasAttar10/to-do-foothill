// let _Tasks = [
//     {
//         id: "t1",
//         text: "Learn Html !",
//         assignee : "Ahmad " ,
//         isDone : false 
//     },
//     {
//         id: "t2",
//         text: "Learn css !",
//         assignee : "Muhammad " ,
//         isDone : true 
//     },
//     {
//         id: "t3",
//         text: "Learn js !",
//         assignee : "Khaled " ,
//         isDone : false 
//     },
// ] 
let _Tasks 

const  ToDo = function (){

    if (! localStorage.getItem('tasks')){
         _Tasks = [] ;
    }
    else{
        _Tasks =JSON.parse(localStorage.getItem('tasks')) ;
    }

    let taskIdCounter = _Tasks.length + 1 ; 

    let addTask = function(text , assignee ){

        let newTask = {}

        newTask.id = "t" + taskIdCounter
        
        newTask.text = text 

        newTask.assignee = assignee

        newTask.isDone = false 
    
        _Tasks.push(newTask)

        localStorage.setItem('tasks',JSON.stringify(_Tasks)) ; 

        taskIdCounter++;
    }

    let removeTask = function(taskId){

        const targetIndex = _Tasks.findIndex(task => {
    
            return  task.id === taskId
            
        })
    
        _Tasks.splice(targetIndex , 1)

        localStorage.setItem('tasks',JSON.stringify(_Tasks)) ;
    
    }

    let updateTask = function(taskId , updatedText , updatedAssignee){

        const targetIndex = _Tasks.findIndex(task => {
    
            return  task.id === taskId
            
        })

        _Tasks[targetIndex].text = updatedText

        _Tasks[targetIndex].assignee = updatedAssignee

        localStorage.setItem('tasks',JSON.stringify(_Tasks)) ;

    }

    let taskDone = function(taskId){

        const targetIndex = _Tasks.findIndex(task => {
    
            return  task.id === taskId
            
        })
    
        _Tasks[targetIndex].isDone =  ( _Tasks[targetIndex].isDone ) ? false : true 

        localStorage.setItem('tasks',JSON.stringify(_Tasks)) ;
    }

    const countTasks = function(){

        return _Tasks.length
    }

    const countTasksDone = function(){
        let countTaksDone = 0 

        for (const task of _Tasks) {

            if(task.isDone)

                countTaksDone++
        }

        return countTaksDone
    }

    return {
        addTask : addTask , 
        removeTask : removeTask ,
        updateTask:updateTask,
        taskDone : taskDone,
        countTasks:countTasks ,
        countTasksDone:countTasksDone
    }
}