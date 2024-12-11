// i always incorporate a notfound page in every of my project, for seamless user experience in my opinion
import { NavLink } from "react-router-dom"

export default function NotFoundPage(){
    return(
        <>
          <div className="h-screen bg-complementary text-accent rounded flex justify-center items-center ">
                <h1 className="text-[200px] text-center">404</h1>
                <h1 className="text-center">Oops! Page Not Found</h1>
              <div className="text-center leading-8">
                <p>Seems you are trying to access a page that does not exist or was probably deleted.</p>
                <p>We apologize for the inconvenience</p>
              </div>
              <div className="flex justify-center items-center bg-main rounded p-5 opacity-2 "> 
              <NavLink to="/" className="text-md text-center">&#8592; Back to Home</NavLink>
              </div>
          </div>
        </>
    )
}