import HelmetComp from "../reusable/HelmetComp"
import { NavLink } from 'react-router-dom'
import Button from '../reusable/Button'

function Home(){
    const bgImage = "https://tse4.mm.bing.net/th?id=OIP.08O5tU9nJbMr7ARhosX3hgHaEL&pid=Api&P=0&h=220"
    return(
        <div className="hero w-full sm:h-auto md:h-full border-0 bg-gradient-to-t from-blue-300 to-gray-100 grid sm:grid-cols-1 md:grid-cols-2 justify-center gap-3">
            <HelmetComp title="University of Cebu - Home" />
           <section className="left-section  flex items-center justify-center">
                <div className="img-wrapper w-2/3 max-w-md shadow-md">
                    <img className="w-full h-auto object-cover object-center rounded" src="https://tse1.mm.bing.net/th?id=OIP.SsmuLDW1vwfaYZSla_MMKgHaGN&pid=Api&P=0&h=220" alt="" />
                </div>
           </section>
           <section className="right-section flex flex-col justify-center text-main items-start gap-3">
                <div className="flex flex-col font-['Saira Extra Condensed', sans-serif] items-start gap-1.5">
                    <h1 className="text-5xl font-extrabold whitespace-nowrap">Enrollment Web Form</h1>
                    <h2 className="text-2xl font-medium">University of Cebu - Banilad Campus</h2>
                    <p></p>
                </div>
                <div className="flex items-center gap-1">
                    <a href="https://www.universityofcebu.net/p/university-of-cebu-banilad-campus.html" className="cursor-pointer text-main text-medium font-extrabold border-4 border-transparent hover:border-4 border-dotted hover:border-white py-1 px-4">Learn more &gt;</a>
                      <NavLink to="/records"><Button text="Get Started" className="bg-main px-7 hover:bg-main/90" /></NavLink>
                </div>
        </section>
        </div>
    );
}

export default Home