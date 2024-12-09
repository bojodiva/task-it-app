import { NavLink, useNavigate } from "react-router-dom";


export default function LandingPage(){
    const navigate = useNavigate();
    const handlePlanTaskClick = () => {
        navigate("/plan")
    }
    const handleTrackTaskClick = () => {
        navigate("/track")
    }


    return(
        <>
        <div className="p-5 bg-main text-accent text-center">
            <p className="text-xl">I hope you find this really helpful</p>
        </div>
        <div className="h-screen flex flex-col justify-center items-center gap-6 bg-accent p-2">
           <h1 className="text-[30px] md:text-[50px]">WELCOME I GUESS :) </h1>
           <div className="flex gap-5 md:gap-10 text-accent">
            <button onClick={handlePlanTaskClick} className="rounded p-3 md:p-5 bg-main px-10 text-sm md:text-lg">Plan My Tasks</button>
            <button onClick={handleTrackTaskClick} className="rounded p-3 md:p-5 bg-main px-10 text-sm md:text-lg">Track My Tasks</button>
           </div>
        </div>
        </>
    )
}