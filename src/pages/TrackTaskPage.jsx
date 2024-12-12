import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"


export default function TrackTaskPage(){
    const {allTasks} = useSelector((state) => state.tasks)

    const navigate = useNavigate();
    const handlePlanTaskClick = () => {
        navigate("/plan")
    }

    const getStatusColor = (status) => { // this function was particularly fun to learn cause I was initially thinking of how I would be able to display different colored text based on the status.
        if(status === "Completed"){
            return "text-green"
        }else if(status === "In Progress"){
            return "text-yellow"
        }else if(status === "Time Elapsed"){
            return "text-red"
        }else{
            return "text-main"
        }
    }

    

    return(
        <>
        <div className="min-h-screen bg-accent flex flex-col">
        <div className="flex justify-evenly items-center gap-1 p-3 bg-main text-accent text-center">
            <p className="text-xl">Make sure to track your planned task!</p>
            <button onClick={handlePlanTaskClick} className="rounded p-3 bg-complementary px-10 text-sm md:text-lg">Plan My Tasks</button>
        </div>
        <div className="flex-grow flex justify-center">
            {allTasks && allTasks.length > 0 ? (
            <div className='rounded-sm w-[350px] md:w-[780px] flex flex-col m-10 gap-5'>
            {allTasks.map((task) => (
                <div key={task.name} className="p-10 text-center border border-2 rounded-sm"> 
                    <h1 className="text-2xl text-main font-bold m-2">{task.name}</h1>
                    <p className="text-xl">{task.description}</p>
                    <div className="flex justify-evenly mt-5">
                    <p className={`text-md font-semi-bold ${getStatusColor(task.status)}`} >{task.status}</p>
                    <NavLink to={`/plan/${task.name}`}>
                    <button className="border rounded-sm p-2 md:px-10">View Details</button>
                    </NavLink>
                    </div>
                </div>
            ))}
           </div>)
           :(
           <p className="text-center p-10">No Task to track yet</p>     
)}
</div>
</div>
        </>
    )
}