import { useState } from "react";

const BgChanger = () => {

    const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor:color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
            <div className="flex flex-wrap justify-center gap-3 py-5 px-12 shadow-lg rounded-2xl" style={{backgroundColor:"White"}}>

                <button 
                    className="outline-none px-4 py-2 text-white rounded-xl" 
                    style={{backgroundColor:"red"}}
                    onClick={()=>{setColor("Red")}}
                >Red</button>
                <button 
                    className="outline-none px-4 py-2 text-white rounded-xl" 
                    style={{backgroundColor:"green"}}
                    onClick={()=>{setColor("green")}}
                >Green</button>
                <button 
                    className="outline-none px-4 py-2 text-white rounded-xl" 
                    style={{backgroundColor:"blue"}}
                    onClick={()=>{setColor("blue")}}
                >Blue</button>
                <button 
                    className="outline-none px-4 py-2 text-white rounded-xl" 
                    style={{backgroundColor:"crimson"}}
                    onClick={()=>{setColor("crimson")}}
                >Crimson</button>
                <button 
                    className="outline-none px-4 py-2 rounded-xl" 
                    style={{backgroundColor:"yellow"}}
                    onClick={()=>{setColor("yellow")}}
                >Yellow</button>
            
            </div>
        </div>
    </div>
  )
}

export default BgChanger