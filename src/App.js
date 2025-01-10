import React,{useEffect, useState} from "react"
import './App.css' 

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const remove = () => {
    if (count <= 0) {
      alert("nhi hoga or remove")
    } else {
      setCount(count - 1)
    }
  }

  const [color, setcolor] = useState()

  var currentTheme = color;

  const setTheme = () =>{
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  useEffect(() => {setTheme();
   
  },[color]);



  return (
    <>
     <div className="container-fluid" >

        <div className="count">
          <h1>let's count</h1>
          <h2>{count}</h2>
          <button onClick={add}> add </button>
          <button onClick={remove}> remove </button>
          {/* <button onClick={setTheme}>change </button> */}
        </div>



        <div class="btn"  >
          <h2>let's change the color</h2>
          <button onClick={() => { setcolor("red")}}>red</button>
          <button onClick={() => { setcolor("blue") }}>blue</button>
          <button onClick={() => { setcolor("green") }}>green</button>
          <button onClick={() => { setcolor("cyan") }}>cyan</button>
        </div>

      </div>
      
    </>
  )
}

export default App
