
let form = document.getElementById('tasks-form')

let parent = document.getElementById("parent")

let search = document.getElementById("search")

let num_toDo = document.getElementById("num_toDo")

let num_Done = document.getElementById("num_Done")

const toDo = ToDo()

const render =Render()

render.reRender(_Tasks)

num_toDo.innerHTML = toDo.countTasks()

num_Done.innerHTML=toDo.countTasksDone()

form.addEventListener('submit' ,(e)=>{

    e.preventDefault()

    let text = document.getElementById("text");

    let assignee = document.getElementById("assignee");

    toDo.addTask(text.value , assignee.value)

    render.reRender(_Tasks)

    num_toDo.innerHTML = toDo.countTasks()

    num_Done.innerHTML=toDo.countTasksDone()

    render.inputDump(text,assignee)

})

document.addEventListener("click" ,(e)=>{

    if(e.target.classList.contains('rmv')){

        Swal.fire({   
            title: 'Are you sure Delete This Task ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                let targetIndex = e.target.parentElement.getAttribute('id')
                toDo.removeTask(targetIndex)
                render.reRender(_Tasks)
                num_toDo.innerHTML = toDo.countTasks()
                num_Done.innerHTML=toDo.countTasksDone()
              Swal.fire(
                'Deleted!',
                'Your Task has been Deleted.',
                'success'
              )
            }
          })

    }

    else if(e.target.classList.contains('update')){

      let targetId= e.target.parentElement.getAttribute("id")

      e.target.parentElement.lastElementChild.style.display="block"

      let children = e.target.parentElement.lastElementChild.children

      let firstInput = children[0].firstElementChild

      let secondInput = children[1].firstElementChild

      firstInput.value = _Tasks.find(t=>t.id == targetId).text

      secondInput.value = _Tasks.find(t=>t.id == targetId).assignee

      children[2].onclick = function(e){

        e.preventDefault()

        toDo.updateTask( targetId , firstInput.value , secondInput.value)

        render.reRender(_Tasks)
      }

    }

    else if 
    ( e.target.tagName.toLowerCase() === 'input' && e.target.getAttribute('type') === 'checkbox')
     {
         let targetIndex = e.target.parentElement.getAttribute('id')

         toDo.taskDone(targetIndex)

         num_toDo.innerHTML = toDo.countTasks()

         num_Done.innerHTML=toDo.countTasksDone()

     }
})

search.addEventListener("keyup" ,()=>{

    let value = search.value.toLowerCase()

    let ArrayToSearch =[];

    for (const task of _Tasks) {

        if(task.text.includes(value))

            ArrayToSearch.push(task)

        render.reRender(ArrayToSearch)

    }
})

num_toDo.innerHTML = toDo.countTasks()

num_Done.innerHTML=toDo.countTasksDone()
