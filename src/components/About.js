import React from 'react'

export default function About(props) {

    let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
    }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyse your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextConv gives you a way to analyze your text quickly and efficiently. Be it word count, character count etc.   
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextConv is a free character analyser tool that provides multiple excercises that could be done on the text. It reports the word and character count. Hence, it is well-formed for assisting people to write content with word/character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        The word counter works well in all the browsers
                    </div>
                    </div>
                </div>
        </div>
    </div>
    
  )
}
