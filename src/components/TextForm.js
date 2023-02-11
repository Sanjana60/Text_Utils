import React, { useState } from 'react';

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleUpClicklow = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter text here')
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} 
                onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} style={{margin: 12}}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleUpClicklow}>Convert to lowercase</button>
            </div>
    )
}
