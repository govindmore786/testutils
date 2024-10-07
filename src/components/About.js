import React,{useState} from 'react'

export default function About() {
    const [mystyle,setmystyle]=useState()
    const dark=()=>{
        setmystyle({color :'white',backgroundColor:'black'})
        
    }
    const normal=()=>{
        setmystyle({color :'black',backgroundColor:'white'})
        
    }
  return (
    <>
    <div style={mystyle}>
      <h1>About us</h1>
      <p style={{ fontSize: '24px' }}>Hello everyone,<br />
      My name is Govind More, BTech third year student and I am learning React.</p>
      <button onClick={dark}>Dark Mode</button>
    <button onClick={normal}>Normal Mode</button>
    </div>
    
    </>
  )
}
