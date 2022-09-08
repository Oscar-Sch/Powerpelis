import {Navigate} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios";
import "../css/Listado.css"
import MovieDisplay from "./MovieDisplay";


function Listado() {
    const[movieList,setMovieList]=useState([]);
    let token=localStorage.getItem("token");
    const date= new Date();
    const fullDate=[]
    fullDate[0]= date.getFullYear();
    fullDate[1]= date.getMonth()<10?"0"+(parseInt(date.getMonth()) +1):parseInt(date.getMonth()) +1;
    fullDate[2]=date.getDate()<10?"0"+date.getDate():date.getDate();
    console.log(fullDate)
    useEffect(() => {
        
        const endpoint=`https://api.themoviedb.org/3/discover/movie?api_key=313de56bc30d8d817aa16e78c9a27fb7&language=es-ES&sort_by=release_date.desc&page=1&release_date.lte=${fullDate[0]}-${fullDate[1]}-${fullDate[2]}&with_original_language=en&with_keywords=9715&`;
        
        axios.get(endpoint).then(res=>{
            let apiData=res.data.results;
            apiData=apiData.filter(movie=>movie.overview!="")
            setMovieList(apiData.slice(0,6));
        });
    }, [setMovieList]);
    return(
        <section className="list-container">
        {!token && <Navigate to="/"/>}
        <MovieDisplay title={"Estrenos!"} movieList={movieList}/>
        <MovieDisplay title={"Ciclo: Batman"} movieList={movieList}/>
        <MovieDisplay title={"Tu Vieja!"} movieList={movieList}/>
        </section>
    );
};

export default Listado;