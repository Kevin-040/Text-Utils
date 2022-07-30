import React from 'react';

export default function About(props) {

//   const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white',
//         border: '1px solid black'
//   }  
//   );

let myStyle = {
    color: props.mode === "dark"? "white":"black",
    backgroundColor: props.mode === "dark"? "black":"white",
    border: '2-px solid',
    borderColor: props.mode === "dark"? "white":"black"
}
//   const [btnMode, setBtnMode] = useState("Enable Dark mode");
  
//   let setTheme = ()=>{
//         if(myStyle.color === 'black'){
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black',
//                 border: '1px solid white'
//             })
//             setBtnMode("Enable Light Mode");
//         }
//         else{
//             setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white',
//                 border: '1px solid black'
//             })
//             setBtnMode("Enable Dark Mode");

//         }
//   }
  
  return (
  <>
  <div className="container my-3">
    <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            <strong>Utilize your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Easy to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>All Browser Compatible</strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    </div>
    {/* <button type="button" className="btn btn-success my-3" onClick={setTheme}>{btnMode}</button> */}
  </div>
  </>
  );
}
