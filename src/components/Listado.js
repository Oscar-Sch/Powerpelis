import {Navigate} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios";
import "../css/Listado.css"


function Listado() {
    const[movieList,setMovieList]=useState([]);
    
    let token=localStorage.getItem("token");
    
    useEffect(() => {

        const endpoint=`https://api.themoviedb.org/3/discover/movie?api_key=313de56bc30d8d817aa16e78c9a27fb7&language=es-ES&sort_by=release_date.desc&page=1&with_keywords=9715&`;

        axios.get(endpoint).then(res=>{
            let apiData=res.data.results;
            setMovieList(apiData.slice(0,4));
        });
    }, [setMovieList]);
    // console.log(movieList)
    return(
        <>
        {!token && <Navigate to="/"/>}
        <div className="movie-slider">
        {movieList.map((movie,idx)=>{
            return(
            <div className="movie-container" key={idx}>
                <div class="movie-title-container">
                    <h2 className="movie-title">{movie.title}</h2>
                </div>
                <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="..."/>
                <div class="movie-overview-container">
                    <p className="movie-overview">{movie.overview}</p>
                </div>
            </div>
            )
        })}
        </div>
        </>
    );
};

export default Listado;