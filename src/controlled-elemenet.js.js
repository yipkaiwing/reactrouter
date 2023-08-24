import { useState, useRef, useEffect } from "react";

const App = () => {

  const [name, setName] = useState(''); 
  const nameFieldRef = useRef();

  const updateName = () => {
    setName('Yip Kai Wing')
  };

  const handler = (e) => {
    setName(e.target.value)
    };


  useEffect(() => {
    // componentDidMount
    nameFieldRef.current.focus();
  },[])

    
  return (

    <main className="px-5 justify-center items-center min-h-screen bg-slate-100 mb-5">

      {<h1 className=" mt-10  text-6xl bg-slate-300 rounded font-bold w-9/12 px-5 mb-5 py-2">{name}</h1>}

      {<input
        className=" text-6xl bg-slate-200 rounded px-5 font-bold text-red-400 box-border w-9/12 mb-5"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={handler} 
        ref={nameFieldRef}
       />
      }
      
      {<button 
        className="flex justify-center items-center rounded px-5 py-2 text-white bg-slate-600"
        onClick={updateName}
      >
        Update the name
      </button>}
    </main>
  )
};

export default App;

// Before adding value=Steven, we can input anything in the textbox input field. This is called the uncontrolled element. 
// React does not know what valye the use has been inputted. 
// After adding value=Steven, it becomes the controlled element. The value is determined and controlled by the react 
// Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing
//  from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components

// How to fix it?
// First of all, we import the useState 