import React,{useState} from 'react';

export default function TextArea(props) {
  const convertUpper=()=>
  {
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase",'primary')
  }
  const convertLower=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to LowerCase",'primary')
  }
  const clearAll=()=>{
    // console.log('clear it');
    setText("")
    props.showAlert("Text Cleared",'primary')
  }
  const remSpace=()=>{
    let newText=text.split(/[ ]+/)  //phle sbko split krke ek array me store krdega and then use ek space ke sath join krdega
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed",'primary')
  }

  const handleOnChange=(event)=>{   //jb bhi text change hoga to us event ko store krke setText me daldege
    // console.log('onChange clicked');
    setText(event.target.value)
    
  }

  const [text, setText] = useState();  //text variable can be setted using setText() function


    return(
      <>
        <div>
        <div className="mb-3 my-3" >
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.text}`}>{props.heading}</label>
        <textarea className={`form-control  text-${props.text}`}  style={{backgroundColor: props.mode}} id="exampleFormControlTextarea1" rows="10" onChange={handleOnChange} value={text}></textarea> 
        {/*box ki value me text rkh dege or jab bhi hm kuch additional write krege ya change krege to vo handleOnChange ko call krdega jo hmare additional writen text ko dobara text me add krra hoga using setText function and final text will be shown in the vaue of our box*/}
      </div>
      <button className="btn btn-primary " onClick={convertUpper}>Convert to Uppercase</button>

      <button className="btn btn-secondary mx-1" onClick={convertLower} >Convert to Lowercase</button>

      <button className="btn btn-primary mx-1" onClick={clearAll} >Clear All</button>

      <button className="btn btn-secondary mx-1" onClick={remSpace}>Remove Extra Spaces</button>
      </div>      
      <div>
         
          <h4 className={`my-2 text-${props.text}`}>Preview</h4>
          <div className={`my-2 text-${props.text}`}>{text}</div>
          {/* text.length>0?text:"Enter Something to Preview Here */}
      </div> 
      </>
    );
}

