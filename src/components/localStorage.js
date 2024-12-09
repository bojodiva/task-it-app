
export const saveToLocalStorage = (state) => {
    try{
        const convertedSerial = JSON.stringify(state)
        localStorage.setItem("taskState", convertedSerial)
    }catch(error){
        console.log("error storing task set")
    }
}

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