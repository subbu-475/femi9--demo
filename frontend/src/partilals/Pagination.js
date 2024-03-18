import React from 'react';

function Paginate({totalRecipesCount,setCurrentPage,resPerPage,currentPage}) {
    let pages = [];
    for(let i=1;i<=Math.ceil(totalRecipesCount/resPerPage);i++){
        pages.push(i);
    }
  return (
    <>
      <div className='paginate-btns-group'>
        <button disabled={currentPage===1} onClick={()=>setCurrentPage((prev)=>{
          if(prev===1){
            return prev;
          }
          return prev-1})} style={currentPage===1?{'background':'#AAB03C', "color":'black',"cursor":"not-allowed"}:{"background":"#104911",'color':'#fff'}} className='paginate-btns'>Prev</button>
        {pages.map((count)=>
          <button className='paginate-btns' style={currentPage===count?{'backgroundColor':'#fff','border':'2px solid #000','color':'#104911'}:{}} key={count} onClick={()=>setCurrentPage(count)}>{count}</button>
        )}
        <button disabled={currentPage===Math.ceil(totalRecipesCount/resPerPage)} onClick={()=>setCurrentPage((prev)=>{
          if(prev===Math.ceil(totalRecipesCount/resPerPage)){
            return prev;
          }
          return prev+1})} className='paginate-btns' style={currentPage===Math.ceil(totalRecipesCount/resPerPage)?{'background':'#AAB03C', "color":'black',"cursor":"not-allowed"}:{"background":"#104911",'color':'#fff'}}>Next</button>
      </div>
    </>
  )
}

export default Paginate;