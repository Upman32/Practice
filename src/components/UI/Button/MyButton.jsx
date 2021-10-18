 import React from 'react'
import classes from './MyButton.module.css'
 const Buttonis = ({children, ...props}) => {
     return (
     <button {...props} className={classes.Btnis}>
{children}
     </button>
     )
 }

 export default Buttonis