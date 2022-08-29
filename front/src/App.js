import "./App.css";
import storeToDb from "./db";
import {  useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  console.log(navigator.onLine, 'is online');
  return (
    <div className="App">
     <button onClick={()=>navigate('/signup')}>signup</button>
     <button onClick={()=>navigate('/signin')}>signin</button>
     <button onClick={()=>navigate('/create-product')}>create-product</button>
     <button onClick={()=>navigate('/show-products')}>show-product</button>
     <button onClick={()=>navigate('/show-sells')}>show-sells</button>
    </div>
  );
}

export default App;
