const Render = function(){

    const createNewElement = function ( elementName , classList , otherProps){
        let El = document.createElement(elementName)
        for (const newClass of classList) {
            El.classList.add(newClass)
        }
        for (const key in otherProps) { 
            El.setAttribute(key , otherProps[key])
        }

        return El
    }

    const  reRender =function(Tasks){

       let parent = document.getElementById('parent')

       empty(parent)

        for (const task of Tasks) {

            let newToDo = createNewElement('div',[],{id : task.id})

            let text = createNewElement('p',[],{})

            let assignee = createNewElement('span',[],{})

            text.innerHTML=task.text

            assignee.innerHTML = "# "+task.assignee

            let removeIcon = createNewElement('i',['fa-sharp' , 'fa-solid' ,'fa-trash' ,'rmv' ],{})

            let updateIcon = createNewElement('i',[ 'fa-solid' ,'fa-pen-to-square' ,'update' ],{})

            let checkbox = createNewElement('input',[],{type:'checkbox'})

            task.isDone ? checkbox.setAttribute("checked" , true ):""

            let updateForm = createNewElement('form',['update-form'],{})

            let div1 = createNewElement('div',[],{})

            let input1 = createNewElement('input',[],{ id:'text' , placeholder :'Enter Your Task '})

            div1.append(input1)
  
            let div2 = createNewElement('div',[],{})
            
            let input2 = createNewElement('input',[],{ id:'text' , placeholder :'Enter The Assginee '})

            div2.append(input2)

            let submit = createNewElement( 'input' , ['btn' ,'edit'] ,  {type : 'submit', value:'Edit'} )

            updateForm.append(div1)

            updateForm.append(div2)

            updateForm.append(submit)

            newToDo.append(text)

            newToDo.append(assignee)

            newToDo.append(removeIcon)

            newToDo.append(updateIcon)

            newToDo.append(checkbox)

            newToDo.append(updateForm)

            parent.append(newToDo)
        }
    }

    const empty = function(element) {
        
        element.innerHTML = ""; 
    }

    const inputDump = function (text , assignee ){
        text.value = ""
        assignee.value =""
    }



    return{
        reRender:reRender,
        inputDump:inputDump
    }
}