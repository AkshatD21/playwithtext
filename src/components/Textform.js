import React, {useState} from 'react'

export default function Textform(props) {

    const [text, setText]  = useState('');
    
    const handleUpclick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case" , "success")
    }

    const handleLoclick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case" , "success")
    }
    
    const handleClear = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared" , "success")
    }

    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        // document.getSelection().removeAllRanges();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard" , "success")
    }
    

    const handleExtraspaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));  
        props.showAlert("Extra spaces removed" , "success")
    }

    const handleOnchange = (event) => {
        // console.log("On change");    
        setText(event.target.value)
    }

    

  return (
      <div className="container" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className="mb-4">{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnchange} style = {{backgroundColor : props.mode === 'dark' ? '#13466e' : 'white' , color : props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
         </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to LowerCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>

         <div className="containr my-3" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Nothing to preview"}</p>
         </div>
      </div>
  )
}
