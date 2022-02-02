import React,{useState} from 'react';

export default function TextArea(props) {
 
  const convertUpper=()=>
  {
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase",'success')
  }
  const convertLower=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to LowerCase",'success')
  }
  const clearAll=()=>{
    // console.log('clear it');
    setText("")
    props.showAlert("Text Cleared",'success')
  }
  const remSpace=()=>{
    let newText=text.split(/[ ]+/)  //phle sbko split krke ek array me store krdega and then use ek space ke sath join krdega
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed",'success')
  }
  
  const handleOnChange=(event)=>{   //jb bhi text change hoga to us event ko store krke setText me daldege
    // console.log('onChange clicked');
    setText(event.target.value)
  }
  const  copyText=()=>{   
    
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied",'success')
    
  }

  const [text, setText] = useState();  //text variable can be setted using setText() function


  return(
    <>
        <div className='mx-auto' style={{width:"70vw"}}>
        <div className="mb-3 my-3 "  >
        <h3 htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.textColor} mb-4`}>{props.heading} </h3>
        <textarea className={`form-control  text-${props.textColor}`}   style={{backgroundColor: props.mode}} id="exampleFormControlTextarea1" rows="10" onChange={handleOnChange} value={text}></textarea> 
        {/*box ki value me text rkh dege or jab bhi hm kuch additional write krege ya change krege to vo handleOnChange ko call krdega jo hmare additional writen text ko dobara text me add krra hoga using setText function and final text will be shown in the vaue of our box*/}
      <button className="btn btn-primary mx-2 my-2"  onClick={convertUpper}>Convert to Uppercase</button>

      <button  className="btn btn-secondary mx-1 my-2"  onClick={convertLower} >Convert to Lowercase</button>

      <button  className="btn btn-primary mx-2 my-2"  onClick={clearAll} >Clear All</button>

      <button  className="btn btn-primary mx-2 my-2"  onClick={copyText} >Copy Text</button>

      <button  className="btn btn-secondary mx-1 my-2" onClick={remSpace}>Remove Extra Spaces</button>
      </div>      
      <div>
         <h2 className={`my-2 text-${props.textColor}`}>Your Text </h2>
         {/* <p>{{text}.split(" ").filter((element)=>{return element.length!==0}).length} words and {{text}.length} characters</p> */}
          <h4 className={`my-2 text-${props.textColor}`}>Preview</h4>
          {/* <div className={`my-2 text-${props.textColor}`}>{text.length>0?text:"Enter the text"}</div> */}
          <div className={`my-2 text-${props.textColor}`}>{text}</div>
          {/* text.length>0?text:"Enter Something to Preview Here */}
      </div> 
      </div>
      </>
    );
}

