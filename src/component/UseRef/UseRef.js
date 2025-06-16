// Explain What useRef Is:
// "useRef is a hook that gives you a mutable object which can persist between renders. You can use it to:
  // - Access DOM elements directly (like focus, scroll, etc.).
  // - Store values that you don’t want to cause a re-render."


import { React,useRef,useState,useEffect } from 'react';
import './UseRef.css';

function FocusInput() {

  // document.querySelector("input").focus();

  const inputRef = useRef(null);

  // const handleClick = () => {
  //   inputRef.current.focus();
  // };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>

      <h1>___________________________________</h1>
    </>
  );
}




// function RenderTracker() {
//   const [count, setCount] = useState(0);
//   const [renderCount, setRenderCount] = useState(1);

//   // useEffect(() => {
//   //   setRenderCount(prev => prev + 1); // ❌ Causes infinite loop
//   //   console.log("Rendered:", renderCount);
//   // });

//   return (
//     <>
//       <p>Clicked {count} times</p>
//       <p>Component rendered {renderCount} times</p>
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </>
//   );
// }

function RenderTracker() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Rendered:", renderCount.current);
  });

  return (
    <>
      <p>Clicked {count} times</p>
      <p>Component rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}



export {FocusInput,RenderTracker};