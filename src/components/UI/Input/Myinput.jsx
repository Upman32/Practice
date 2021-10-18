import React from 'react'
import classes from './Myinput.module.css'
const Inputis =  React.forwardRef((props, ref) => {
    return (
        <input ref={ref}className={classes.Iptis}  {...props}/>
        
  
    )
})  
export default Inputis