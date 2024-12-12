// here we have two functions

//this is the first function to save content to local storage 
export const saveToLocalStorage = (state) => {
    try{
        const convertedSerial = JSON.stringify(state)
        localStorage.setItem("taskState", convertedSerial)
    }catch(error){
        console.log("error storing task set")
    }
}

//this is the second function to get the previously saved content in the local storage
export const getFromLocalStorage = () => {
    try{
        const convertedSerial = localStorage.getItem("taskState");

        if(convertedSerial ===  null){
            return undefined;
        }

        return JSON.parse(convertedSerial)
    }catch(error){
        console.log("error loading state from local storage")
    }
}