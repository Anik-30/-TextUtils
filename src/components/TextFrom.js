import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase")
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase")
  };

  const handleCopyClick = () => {
    console.log("copy to clipboard");

    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipboard")
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} 4532324 characters
        </p>
        <p>{0.008 * text.split(" ").length} mins read</p>
        <h6>Preview</h6>
        <p>{text.length>0?text:"Enter something in the textbox about preview it here"}</p>
      </div>
    </>
  );
}
