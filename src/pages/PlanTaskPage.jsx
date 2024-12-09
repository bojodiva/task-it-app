import { useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { updateFormField, resetFormField, setAllTasks } from "../redux/features/tasks/tasksSlice";


export default function PlanTaskPage(){
    const dispatch = useDispatch();
    const {name, description, timeline, allTasks} = useSelector((state) => state.tasks);
    const navigate = useNavigate();

    const handleTrackTaskClick = () => {
        navigate("/track")
    };

    const handleFormFieldChange = (e) => {
        const {name, value} = e.target;
        dispatch(updateFormField({ field: name, value }))
    }

    const handleSaveClick = (e) => {
        e.preventDefault();
        const task = {name: name, description: description, timeline: timeline};
        if(name.trim() !== "" && description.trim() !== "" && timeline.trim() !== ""){
            dispatch(setAllTasks(task));
            dispatch(resetFormField())
        }
    }

    // console.log(allTasks)
    if(!allTasks){
        return <p>No Task has been planned yet.</p>
    }

    return(
        <>
        <div className="min-h-screen bg-accent flex flex-col">
        <div className="flex justify-evenly items-center gap-1 p-3 bg-main text-accent text-center">
            <p className="text-xl">Now let us get into planning your task!</p>
            <button onClick={handleTrackTaskClick} className="rounded p-3 bg-complementary px-10 text-sm md:text-lg">Track My Tasks</button>
        </div>
        <div className="p-10 flex flex-col justify-center">
                <table className="w-full table-fixed border-collapse border-spacing-2 border border-slate-300">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 p-2 w-1/3">Task</th>
                            <th className="hidden md:table-cell border border-slate-300 p-2 w-1/3 break-words">Description</th>
                            <th className="border border-slate-300 p-2 w-1/3">Timeline</th>
                            <th className="border border-slate-300 p-2 w-1/3"></th>
                        </tr>
                    </thead>
                    {allTasks && allTasks.length > 0 ? (
            allTasks.map((task) => (
                    <tbody key={task.name} className="text-center">
                        <tr>
                            <td className="border border-slate-300 p-2">{task.name}</td>
                            <td className="hidden md:table-cell border border-slate-300 p-2 text-left break-words">{task.description}</td>
                            <td className="border border-slate-300 p-2" >{task.timeline}</td>
                            <td className="border border-slate-300 p-2">
                               <Link to={`/plan/${task.name}`}>
                                <button className="border rounded-sm p-2 md:px-10">View Details</button>
                               </Link>
                            </td>
                        </tr>
                    </tbody>
            ))) : (
                <p className="p-10">No Task has been planned yet</p>
            )}
            </table>
        </div>
        <div className="flex justify-center p-5">
           <form onSubmit={handleSaveClick} className="flex flex-col p-5 gap-3">
             <label className="flex justify-start">Task Name</label>
             <input type="text" name="name" value={name} onChange={handleFormFieldChange} placeholder="Name your task" className="p-3  md:w-[700px]"/>

             <label className="flex justify-start">Task Description</label>
             <input type="text" name="description" value={description} onChange={handleFormFieldChange} placeholder="describe your task" className="p-3 md:w-[700px]"/>

             <label className="flex justify-start">Task Timeline</label>
             <input type="date" name="timeline" value={timeline} onChange={handleFormFieldChange} placeholder="enter" className="p-3 md:w-[700px]"/>

             <button className="p-3 w-[280px] md:w-[700px] bg-main text-accent">Save Task</button>
           </form>
        </div>
        </div>
        </>
    )
}