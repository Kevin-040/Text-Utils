import React, {useState} from 'react';         // "useState" Hook

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked !");
        let newText = Text.toUpperCase();
        setText(newText);
        props.alert("Converted to UpperCase", "success")
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked !");
        let newText = Text.toLowerCase();
        setText(newText);
        props.alert("Converted to LowerCase", "success")
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.alert("Text Cleard", "success")
    }

    const handleCopy =()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.alert("Copied to ClipBoard", "success")
    }

    const handleExtraSpace =()=>{
      let newText = Text.split(/[ ]+/);
      setText(newText.join(" "))
      props.alert("Extra Space Removed", "success")
    }

    const handleSplit =()=>{
      const newText = Text.split(" ");           // "newText" is array here, because we use "split()" function
      const newText2 = Text.split("");
      const newText3 = Text.split(/[ ]+/);
      document.getElementById("demo").innerHTML = newText3;
      props.alert("Splitted", "success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);    // to enable the "Write" in textArea &&& To set the state variable= Text
    }

    const [Text, setText] = useState('Enter Text here');     // Syntax of "State"
    //Text = "vdeygygysdgyu";  // Wrong way to change the state
    //setText("vdeygygysdgyu");  // Wrong way to change the state

  return (
  <>
  <div style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3" >
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className ="btn btn-success mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
    <button className ="btn btn-success mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
    <button className ="btn btn-success mx-2" onClick={handleClearClick} >Clear Text</button>
    <button className ="btn btn-success mx-2" onClick={handleCopy} >Copy Text</button>
    <button className ="btn btn-success mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>
    <button className ="btn btn-success mx-2" onClick={handleSplit} >Split</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and  {Text.length} characters</p>
    <p>{0.008 * Text.split(" ").length} Minutes read time</p>

    <h3>PREVIEW</h3>
    <p>{Text}</p>
    <h3>Split Output (array)</h3>
    <p id="demo"></p>
  </div>
  </>
  );
}
