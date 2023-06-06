class Task{
    #name;
    #priorityValue;
    #priorityName;
    #status;
    #deleteCheck;

    constructor(name, priorityValue, priorityName){ 
        this.#name = name;
        this.#priorityValue = priorityValue;
        this.#priorityName = priorityName;
        this.#status = "Pending";
        this.#deleteCheck = false;
    }

    // name set & get
    setName(name){ 
        this.#name = name;
    }
    getName(){ 
        return  this.#name;
    }

     // priorityValue set & get
     setPriorityValue(priorityValue){ 
        this.#priorityValue = priorityValue;
    }
    getPriorityValue(){ 
        return  this.#priorityValue;
    }

   // priorityName set & get
   setPriorityName(priorityName){ 
    this.#priorityName = priorityName;
    }
    getPriorityName(){ 
        return  this.#priorityName;
    }
       // status set & get
   setStatus(status){ 
    this.#status = status;
    }
    getStatus(){ 
        return  this.#status;
    }
          // deleteCheck set & get
   setDeleteCheck(deleteCheck){ 
    this.#deleteCheck = deleteCheck;
    }
    getDeleteCheck(){ 
        return  this.#deleteCheck;
    }
    
}