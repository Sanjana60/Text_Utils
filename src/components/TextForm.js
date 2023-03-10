import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Changed to Uppercase!","Success")
    }

    const handleUpClicklow = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Changed to Lowercase!","Success")
    }

    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showalert("Text Clear!!!","Success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}
                    onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'pink':'white' }} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleUpClicklow}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((t) => t!=="").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the text box to preview here.'}</p>
        </div>
        </>
    )
}
