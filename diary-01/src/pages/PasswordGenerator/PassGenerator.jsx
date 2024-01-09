import { useState,useCallback, useEffect, useRef } from "react";

const PassGenerator = () => {

  const [length, setLength] = useState(0);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState('');
  const passRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFFGHIJKLMNOPQRSTUVWXYZ";
    if (allowNumber) str += "1234567890";
    if (allowChar) str += "*&^%$#@!(){}:<>?";

    for (let x = 0; x < length; x++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length, allowChar, allowNumber, setPassword]);


  useEffect(()=>{
    passwordGenerator();
  },[length, allowChar, allowNumber, setPassword]);


  const copyClipboard = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  return (
    <div className="h-screen w-100 bg-slate-950" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="generator-box bg-black p-4 rounded-xl mt-12" style={{ width: '40%', height: '250px' }}>
        <h1 className="text-white text-center text-2xl">Password Generator</h1>
        <div className="sm:col-span-4 ">
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mt-3">

              <input 
                type="text" 
                name="username" 
                ref={passRef}
                id="username" 
                autoComplete="off" 
                className="outline-none border-none block flex-1 border-0 bg-transparent py-1.5 pl-3 text-indigo-600 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                value={password}
                placeholder="Random Password" 
              />
            </div>
          </div>
        </div>

        
        <button  className="outline-none bg-indigo-700 py-1 px-2 text-white rounded-lg mt-3"
          onClick={copyClipboard}
        >Copy</button>

        <div className="mt-4">
          <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} className="curson-pointer" />
          <label className="ml-2 text-indigo-700">Length: ({length})</label>

          <input type="checkbox"
          className="ml-3"
            defaultChecked={allowNumber}
            onChange={ ()=>{
              setAllowNumber((prev) => !prev);
            }}
          
          />
          <span className="text-indigo-700 ml-1">Number</span>

          <input type="checkbox"
          className="ml-3"
            defaultChecked={allowChar}
            onChange={ ()=>{
              setAllowChar((prev) => !prev);
            }}
          
          />
          <span className="text-indigo-700 ml-1">Character</span>
        </div>

      </div>
    </div>
  )
}

export default PassGenerator