// import React,{useState} from "react";
import React from "react";

export default function About(props) {
    // const [style, setstyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black',
    //     border: '2px solid black'
        
    // });

    // const [btntext, setbtntext] = useState('Enable Dark Mode');
    
    // const  toggleBtn=()=>{
    //     if(style.backgroundColor==='white')
    //     {
    //         setstyle({
    //            backgroundColor: 'black',
    //            color: 'white',
    //            border: '2px solid white'       
    //         })
    //         setbtntext('Enable Light Mode')
            
    //     }
    //     else{
    //         setstyle({
    //             backgroundColor: 'white',
    //             color: 'black',
    //             border: '2px solid black'
    //         })
    //         setbtntext('Enable Dark Mode')
    //     }
    // }

    let style={
      color: props.mode==="light"?"black":"white",
      backgroundColor: props.mode==="light"?"#ffa1eced":"rgb(4, 0, 61)"
    }

  return (
    <div className="container my-3" style={style} >
      <div>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item" style={style} >
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"aria-expanded="true" aria-controls="collapseOne" style={style}  > <strong>Accordion Item #1</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"   >
              <div className="accordion-body my-3" style={style} ><strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit</div>
            </div>
          </div>
        
         
        </div>
      </div>
      {/* <div className="container my-2">
         <button  style={style} onClick={toggleBtn}>{btntext}</button>
      </div> */}
    </div>
  );
}
