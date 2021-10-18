import React from 'react'
import { getPagesArray } from '../../Utils/pages'


const Paginator = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
   
    return (
    <div className="p_wrapper">
    {pagesArray.map(p => 
      <span
      onClick={()=> changePage(p)} 
      key={p} 
      className={page === p ? 'page page__current' : 'page'}>
          {p}
      </span>
      )}
    </div>)}
    
export default Paginator