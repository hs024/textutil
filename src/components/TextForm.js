import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import copy from 'clipboard-copy'
export default function TextForm(props) {
  const wordcount = (text) => {
    // Split the text into an array of words
    let words = text.split(" ");
    
    // Filter out empty strings (spaces) from the array
    words = words.filter(word => word.trim() !== "");
    
    return words.length;
}
  
  
  
  
  
  
  
  
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text)
    let newtext=text.toUpperCase();
    setText(newtext )
    props.showalert("Converted to UpperCase")
  }
  const handlelowClick=()=>{
    // console.log("Uppercase was clicked"+text)
    let newtext=text.toLowerCase();
    setText(newtext )
    props.showalert("Converted to LowerCase")

  }
  









  const handleonchange=(event)=>{
    // console.log("Uppercase was clicked")
    setText(event.target.value);
    
  }
  const handleclear=()=>{
    // console.log("Uppercase was clicked")
    setText("");
    setmail("")
    setsearch("")
    props.showalert("All Cleared")

  }
  const handlemail = () => {
    // console.log("Uppercase was clicked")
    let newtext = text.split(" ");
    let result = "";
    for (let index = 0; index < newtext.length; index++) {
        const element = newtext[index];
        if (element.includes("@") && element.includes(".com")) {
            result = element;
            break;
        }
    }
    if (result !== "") {
        setmail("It contains email: " + result);
        props.showalert("It contains email: " + result)

    } else {
        setmail("No email found.");
        props.showalert("No email found.")

    }
    
}
const copyToClipboard = () => {
  copy(text);
  // alert('Text copied to clipboard!');
  props.showalert('Text copied to clipboard!')

};
const handlespace=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "))
  props.showalert("Spaces Removed")

}

const search=()=>{
  props.showalert("search at position "+ text.indexOf(searchword),"success")
  setmail("Found at position "+ text.indexOf(searchword));
}
const handlesearch=(event)=>{
  
  setsearch(event.target.value);
  
}



const [searchword,setsearch] = useState("" );

  const [mail,setmail] = useState("" );

    const [text,setText] = useState("" );
  return (<>
    <div className='container'>
    <h2 className='m-3'>{props.heading }</h2>
<div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label">Enter Text below:</label> */}
  <textarea className={`form-control bg-${props.mode} text-${props.mode ==="light"?"dark":"light"} `}  value ={text} id="myBox" rows="5" onChange={handleonchange}></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary m-2' onClick={handlelowClick}>Convert to LowerCase</button>
<button className='btn btn-primary m-2' onClick={handleclear}>Clear Text</button>
<button className='btn btn-primary m-2' onClick={handlemail}>Mail extract</button>
<button className='btn btn-primary m-2' onClick={copyToClipboard}>Copy to clipboard</button>
<button className='btn btn-primary m-2' onClick={handlespace}>Remove Space</button>



<div className='m-3 container-fluid'>
   <div className="row">     <input className={`form-control me-2  bg-${props.mode} text-${props.mode ==="light"?"dark":"light"} `} value={searchword}   placeholder="Search any word from text"  onChange={handlesearch}/>
        <button className="btn btn-outline-success mt-3 col-sm-5"  onClick={search}>Search</button>
      </div></div>


    </div>
<div className="container my-2">
<h3>Your Text Summary</h3>
<p>  Your text has {wordcount(text)}  words and {text.length } character . {mail} </p>
<p>It take {0.0016*(text.length) } minute to read this.</p>
<h3>Preview:</h3>
<p>{text.length>0?text:"Enter something to preview"}</p>
</div>







  </>
  )
}

TextForm.propTypes={
    heading:PropTypes.string
}
TextForm.defaultTypes={
  heading:"ye hi heading"
}
// Navbar.propTypes={title:PropTypes.string}