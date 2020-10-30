import React, {useState} from "react"
import './App.css';

const baseUrl = "http://localhost:5000/api"

function App() {
  const [email, setEmail] = useState("")
  const setEmailId = (e) =>{
    setEmail(e.target.value)
  }
  const addEmail = () =>{
    fetch(`${baseUrl}/add`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    })
    .then(res=>{
      if(res.status === 200){
        alert(`${email} added successfully`)
      }else{
        alert("Failed to add email")
      }
    })
  }

  const deleteEmail = () =>{
    fetch(`${baseUrl}/delete`,{
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    })
    .then(res=>{
      if(res.status === 200){
        alert(`${email} deleted successfully`)
      }else{
        alert("Failed to delete email")
      }
    })
  }
  return (
    <div className="App">
      <div>
        <h1>Welcome to Byjus</h1>
      </div>
      <div>
        Email: <input name="email" onChange={setEmailId} value={email}/>
      
      </div>
      <div style={{marginTop:"10px"}}>
      <button onClick={addEmail}>Add</button>
        <button onClick={deleteEmail}>Delete</button>
      </div>
    </div>
  );
}

export default App;
