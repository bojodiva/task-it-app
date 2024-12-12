import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTaskStatus } from '../redux/features/tasks/tasksSlice';

export default function IndividualTask(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const {allTasks} = useSelector((state) => state.tasks)
    const task = allTasks.find((task) => task.name === id)
    
    const currentTime = new Date();
    
    //const creationTime = new Date(task.creationTime); I thought I will be needing this in the calculation of the time left. Although i might need it later tho

    const timelineDate = new Date(task.timeline);

    const timeleftInSeconds = Math.max((timelineDate - currentTime) / 1000, 0);

    const isOverdue = currentTime > timelineDate; // to know if the time left has expired

    useEffect(() =>{
    if(isOverdue){
        dispatch(updateTaskStatus({id: task.name, newStatus: "Time Elapsed"}))
    }
    }, [isOverdue])

    const handleMarkAsCompleted = () => { //this is the function or when the user clicks the button to mark the task as completed
        dispatch(updateTaskStatus({ id: task.name, newStatus: "Completed" }));
        navigate("/track");
    };

    const [timeleft, setTimeleft] = useState(timeleftInSeconds) // I set a local state here to store the timeleft in second. This is because I will only be needing the state in this component.

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeleft((prevTime) => Math.max(prevTime - 1, 0));
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);

      const formatTimeLeft = (seconds) => {
        const days = Math.floor(seconds / (60 * 60 * 24));
        const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
      
        return `${days}d : ${hours}h : ${minutes}m : ${secs}s`;
      };
      

    const handlePlanTaskClick = () => {
        navigate("/plan")
    };
    const handleTrackTaskClick = () => {
        navigate("/track")
    };


    return(
        <>
        <div className="h-screen bg-accent">
         <div className="flex justify-evenly items-center gap-1 p-3 bg-main text-accent text-center">
            <p className="text-xl">Make sure to track your planned task!</p>
            <button onClick={handlePlanTaskClick} className="rounded p-3 bg-complementary px-10 text-sm md:text-lg">Plan My Tasks</button>
            <button onClick={handleTrackTaskClick} className="rounded p-3 bg-complementary px-10 text-sm md:text-lg">Track My Tasks</button>
        </div>
        <div className="flex justify-center p-10">
            <div className='text-center border border-2 rounded w-[300px] md:w-[780px] h-[400px] flex flex-col items-center justify-center'>
            <h1 className='font-bold text-2xl m-3'>{task.name}</h1>
            <p className='text-lg m-2'>{task.description}</p>
            {/* <p>{creationTime}</p> */}
            {task.status === "Completed" ? (
                    <p className="text-green font-bold mt-5">Task Completed</p>
                    ) : (
                        <>
                            {!isOverdue ? (
                                 <>
                                    <p className='m-5 text-xl font-bold'>Time Left: {formatTimeLeft(timeleft)}</p>
                                    <button onClick={handleMarkAsCompleted} className='bg-green text-main p-3 rounded-sm transition duration-300 ease-in-out transform hover:scale-105'>Mark as completed</button>
                                 </>
                                 ):(
                                    <p className='text-red text-xl'>{task.status}</p>
                                )}
                         </>
                    )}
            </div>
        </div>
        </div>
        </>
    );
}