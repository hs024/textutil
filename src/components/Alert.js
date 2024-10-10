import React from 'react'

export default function Alert(props) {

  const capitalize = (word) => {
    if (typeof word === 'string') {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    else if (typeof word === 'number') {
      return word.toString();
  }
   else{ return '';}
  }
  return (
    
    props.alert && 
    <div >

    <div className={`alert alert-${props.alert.type} alert-dismissible fade show  `} role="alert">
  <strong> {capitalize(props.alert.type)} </strong>: {props.alert.msg}
</div>
    </div>
    
  )
}
