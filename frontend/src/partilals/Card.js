import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config/global';


function Card(props) {
  const [popup,setPopup]=useState(false);
  const [view,setView]=useState(false);
  const navigate=useNavigate();
  return (
    <>
        <div className="col">
          <div className="card shadow-sm">
            <div className='popup-window' style={popup?{'display':'block'}:{'display':'none'}}>
              <ul>
                <li>Recipe name : {props.name}</li>
                <li>preptime : {props.preptime} mins</li>
                <li>cooktime : {props.cooktime} mins</li>
                <li>totaltime : {props.totaltime} mins</li>
              </ul>
            </div>
              <img src={`${API_URL}/images/recipes/${props.image}`} onClick={() => navigate(`/recipe/${props.id}`)} className='img-shown' style={{"cursor":"pointer"}} alt={`${API_URL}/images/recipes/${props.image}`}/>
              <div className="card-body" onMouseEnter={()=>setPopup(true)} onMouseLeave={()=>setPopup(false)}>
                <p className="card-text" style={{"cursor":"pointer"}} onClick={() => navigate(`/recipe/${props.id}`)}>{props.name.length<35?props.name:props.name.substring(0,30)+"....."}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary" style={view?{'color':'#fff','background':'#AAB03C','fontWeight':'500'}:{'color':'#fff','background':'#104911','fontWeight':'500'}} onMouseEnter={()=>setView(true)} onMouseLeave={()=>setView(false)} onClick={() => navigate(`/recipe/${props.id}`)}>View</button>
                  </div>
                  <small className="text-body-secondary" style={{'color':'#548C2F'}}><span style={{'color':'black','fontWeight':'550'}}>Date</span> :<span style={{'color':'#548C2F','fontWeight':'550'}}>{new Date(props.addedon).getUTCDate()}-{new Date(props.addedon).getUTCMonth()}-{new Date(props.addedon).getUTCFullYear()}</span></small>
                  <small className="text-body-secondary" style={{'color':'#548C2F'}}><span style={{'color':'black','fontWeight':'550'}}>Time</span> :<span style={{'color':'#548C2F','fontWeight':'550'}}>{new Date(props.addedon).getUTCHours()} hrs {new Date(props.addedon).getUTCMinutes()}</span> mins</small>
                  <small className="text-body-secondary" style={{'color':'#548C2F'}}><span style={{'color':'black','fontWeight':'550'}}>By</span> : <span style={{'color':'#AAB03C','fontWeight':'550'}}>{props.owner}</span></small>
                </div>
              </div>
            </div>
        </div>
    </>
    
  )
}

export default Card;