import HelmetComp from "../reusable/HelmetComp"

function Home({mTop}){
    const bgImage = "https://tse4.mm.bing.net/th?id=OIP.08O5tU9nJbMr7ARhosX3hgHaEL&pid=Api&P=0&h=220"
    return(
        <div style={{height: `calc(100dvh - ${mTop + 2}px)`}} className="border-0 bg-gradient-to-t from-blue-300 to-gray-100 grid sm:grid-cols-1 md:grid-cols-2 justify-center gap-3">
            <HelmetComp title="University of Cebu - Home" />
           <section className="left-section  flex items-center justify-center">
                <div className="img-wrapper w-2/3 max-w-md shadow-md">
                    <img className="w-full h-auto object-cover object-center rounded" src="https://tse1.mm.bing.net/th?id=OIP.SsmuLDW1vwfaYZSla_MMKgHaGN&pid=Api&P=0&h=220" alt="" />
                </div>
           </section>
           <section className="right-section flex flex-col justify-center text-main items-start gap-4">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-7xl tracking-wide font-extrabold">University</h1>
                    <h2 className="text-3xl">of Cebu - Banilad Campus</h2>
                </div>
                <div className="flex items-center gap-1">
                    <a href="https://www.universityofcebu.net/p/university-of-cebu-banilad-campus.html" className="cursor-pointer text-main text-medium font-extrabold border-4 border-transparent hover:border-4 border-dotted hover:border-white py-1 px-4">Learn more &gt;</a>
                      <button onClick={() => alert("hehe design ragd")} className="bg-main cursor-pointer text-white text-xsm font-bold py-2 px-7 rounded-full hover:bg-main/80">Get Started</button>  
                </div>
        </section>
        </div>
    );
}

export default Home