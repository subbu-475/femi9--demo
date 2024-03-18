import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../config/global';
import Card from './Card';
import Loader from './Loader';
import Paginate from './Pagination';

export default function Show() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const[currentPage,setCurrentPage]=useState(1);
  const resPerPage=15;
  const [recipeCount,setRecipeCount]=useState(0);
  useEffect (()=>{
    const getRecipies = async ()=>{
      try{
        const response = await axios.get(`${API_URL}/recipies?page=${currentPage}`);
        setData(response.data.recipes);
        setRecipeCount(response.data.recipesCount)
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      catch (err){
        console.log(err);
      }
    }
    getRecipies();
    
  },[currentPage])
  


  const totalRecipesCount = recipeCount;
  const lastIndexInPage = currentPage*resPerPage;
  const firstIndexPerPage = lastIndexInPage - resPerPage;
  console.log(totalRecipesCount);
  

  return (
    <>
      {loading?(<Loader/>):(
        <>
          <h2 className="pb-2 border-bottom recipe-heading">Recipies</h2>
          <div className='width-height'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {data.map((recipe)=>
                <Card 
                id={recipe._id}
                name={recipe.recipename}
                key={recipe._id}
                image={recipe.image}
                addedon={recipe.addon}
                owner={recipe.owner}
                preptime={recipe.preptime}
                cooktime={recipe.cooktime}
                totaltime={recipe.totaltime}
                />
              )}
            </div>
          </div>
        </>)
      }
      {totalRecipesCount>resPerPage?<Paginate 
        totalRecipesCount={totalRecipesCount}
        lastIndexInPage={lastIndexInPage}
        firstIndexPerPage={firstIndexPerPage}
        setCurrentPage={setCurrentPage}
        resPerPage={resPerPage}
        currentPage={currentPage}
      />:null}
    </>
  );
}
