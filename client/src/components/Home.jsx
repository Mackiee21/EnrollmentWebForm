
function Home({mTop}){
    return(
        <div style={{height: `calc(100dvh - ${mTop + 2}px)`}} className="border-0 bg-gradient-to-r from-main/80 to-main/50 flex flex-col items-center justify-center gap-3">
           <h1 className="bg-gradient-to-r from-main/50 to-main/80 py-5 px-8 text-6xl rounded-lg font-extrabold tracking-wide text-white">University of Cebu</h1>
           <h3 className="text-4xl font-bold tracking-wide text-white">Banilad</h3>
        </div>
    );
}

export default Home