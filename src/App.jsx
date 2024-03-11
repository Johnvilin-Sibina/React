import { useState } from "react";
import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
//Example for how useState works through button
/*function App() {
  const [counter,setCounter] = useState(0);

  return (
    <>
     <button onClick={()=>{
      setCounter(counter+1)
     }}>+</button> 
     {counter}
     <button onClick={()=>{
      setCounter(counter-1)
     }}>-</button>
    </>
  )
}

export default App*/

//Example for changing the position of an object

/*function App() {
  const [right, setRight] = useState(10);
  const [top, setTop] = useState(10);
  return (
    <>
      <div
        style={{
          height: 200,
          width: 200,
          backgroundColor: "wheat",
          position: "absolute",
          left: right,
          top: top
        }}
      ></div>
      <button
        onClick={() => {
          setRight(right+10);
        }}
      >
        Right
      </button>
      <button
        onClick={() => {
          setTop(top+10);
        }}
      >
        Top
      </button>
    </>
  );
}
export default App;*/

//Bulb and opacity

function App() {
  const [onOff, setOnOff] = useState(true);
  const [color,setColor] = useState("wheat");
  const [opacity,setOpacity] = useState(100);
  return (
    <div className="container">
      <div className="row">
        <div ClassName="col-lg-6">
        <div
          style={{
            width: 200,
            height: 200,
            backgroundColor: `${onOff ? color : ""}`,
            borderRadius: 100,
            opacity: opacity/100
          }}
        ></div>
        </div>
      <div className="col-lg-6">
        <div className="row">
          <div
          onClick={()=>{
            setColor("red")
          }}
            style={{
              
              width: 25,
              height: 25,
              backgroundColor: "red",
              borderRadius: 100,
            }}
          ></div>
          <div
            onClick={()=>{
            setColor("orange")
          }}
            style={{
              
              width: 25,
              height: 25,
              backgroundColor: "orange",
              borderRadius: 100,
            }}
          ></div>
          <div
          onClick={()=>{
            setColor("green")
          }}
            style={{
              
              width: 25,
              height: 25,
              backgroundColor: "green",
              borderRadius: 100,
            }}
          ></div>
          <div
          onClick={()=>{
            setColor("blue")
          }}
            style={{
              
              width: 25,
              height: 25,
              backgroundColor: "blue",
              borderRadius: 100,
            }}
          ></div>
        <div>
          <input type="range" min="1" max="100" value={opacity}
          onChange={(e)=>{
            console.log(e);
            setOpacity(e.target.value)
          }}></input>
          {opacity}
        </div>
      <div>
        <button onClick={()=>{
             setOnOff(!onOff)
        }}>{onOff ? "Off" : "On"}</button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default App;
