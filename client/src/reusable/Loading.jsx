import '../css/loading.css'
function Loading(){
    return (
        <div className="loading h-96 w-full flex items-center justify-center">
            <div className="flex gap-2 h-20 rotate-180">
                <div className="div1 order-5"></div>
                <div className="div2 order-4"></div>
                <div className="div3 order-3"></div>
                <div className="div4 order-2"></div>
                <div className="div5 order-1"></div>
            </div>
        </div>
    );
}

export default Loading