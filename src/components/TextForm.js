import React,{useState} from 'react'


export default function TextForm(props) {
  const clicked=()=>{
    let newText=text.toUpperCase();

    setText(newText)
      }
  const lower=()=>{
    let newText=text.toLowerCase();

    setText(newText)
      }
      const changed=(event)=>{
setText(event.target.value)
      }
     const Clear = ()=>{
      setText('')
     }
  const [text,setText]=useState("")
 
  return (<><br />
  <h1 id={props.mod}>Welcome to Textutils !!</h1> <br />
    <div className="float" id={props.mod}>
  <textarea className="form-control" value={text}  placeholder='Enter the text ' id={props.txta} rows="10" onChange={changed}></textarea>
 
  <button onClick={clicked}id={props.mode}>Uppercase</button>
  <button onClick={lower}id={props.mode}>Lowercase</button>
  <button onClick={Clear}id={props.mode}>Clear</button>
</div>
<div id={props.mod}><br />
  <h1>Your text summary</h1><br />
<h5>Number of characters : {text.replace(/\s+/g, '').length} </h5><br /><h5>Number of words : {text.trim().split(/\s+/).filter((word) => word !== "").length}</h5>
<h3>Preview</h3><br />{text}
</div>
</>)

}
