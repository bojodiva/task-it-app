import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import PlanTaskPage from "../pages/PlanTaskPage";
import TrackTaskPage from "../pages/TrackTaskPage";
import IndividualTask from "../pages/IndividualTask";


export default function GeneralRouter(){
    return(
        <>
        <nav>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/plan" element={<PlanTaskPage/>}/>
                <Route path="/plan/:id" element={<IndividualTask/>}/>
                <Route path="/track" element={<TrackTaskPage/>}/>
            </Routes>
        </nav>
        </>
    )
}