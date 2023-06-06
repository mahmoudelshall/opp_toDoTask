class TasksList{
    #tasks=[];
     // tasks set & get
     addTask(newTask){ 
        this.#tasks.push(newTask);
    }
    getTasks(){ 
        return this.#tasks;
    }
    
}