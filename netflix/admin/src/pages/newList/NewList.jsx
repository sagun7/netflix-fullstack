
import { useEffect } from "react";
import { useContext, useState } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import storage from "../../firebase";
import "./newList.css";

export default function NewList() {
  const [list, setList] = useState(null);


  const {dispatch} = useContext(ListContext);
  const {movies, dispatch:dispatchMovie} = useContext(MovieContext);

  useEffect(()=>{
    getMovies(dispatchMovie)
  },[dispatchMovie])

  const handleChange = (e) =>{
    const value = e.target.value;
    setList({...list, [e.target.name]:value })

  };

 
  const handleSelect = (e) => {
   console.log( e.target.selectedOptions );
  }




  const handleSubmit =(e) =>{
    e.preventDefault();
  
  }

 


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
      
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title"  onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="description" name="genre"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange} >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Content</label>
          <select multiple name="content" onChange={handleSelect} >

            {movies.map(movie => (
                   <option key={movie._id} value={movie._id}>{movie.title}</option>
            ))}
           
           
          </select>
        </div>
        
       <button className="addProductButton" onClick={handleSubmit}>Create</button>
      
      </form>
    </div>
  );
}
