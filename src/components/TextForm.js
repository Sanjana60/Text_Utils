import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleUpClicklow = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = () => {
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here')
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}
                    onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleUpClicklow}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
        </div>

        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
