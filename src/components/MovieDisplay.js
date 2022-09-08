import {useState, useRef} from "react"

function MovieDisplay({title,movieList}){
    const [premieresFullLength,setPremieresFullLength]=useState(false);
    const [premieresHidden,setPremieresHidden]=useState(false);
    const premieresRef= useRef(null);

    const handlePremieres=()=>{
        setPremieresFullLength(!premieresFullLength);
        setPremieresHidden(!premieresHidden);
        if (premieresFullLength){
            premieresRef.current.scrollIntoView({behavior:"smooth",block:"start"})
        }
    };

    return(
        <>
        <div className="movie-article-container" ref={premieresRef}>
            <article  onClick={()=>handlePremieres()} className={`movie-article ${premieresFullLength?"full-length":""} ${!premieresHidden?"movie-article-hov":""}`}>
                <h2 className="movie-article-title">{title}</h2>
            <div className="movie-showcase">
                {movieList.map((movie,idx)=>{
                    return(
                    <div className="movie-container" key={idx}>
                        <div className="movie-title-container">
                            <h2 className="movie-title">{movie.title}</h2>
                        </div>
                        <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="..."/>
                        <div className="movie-overview-container">
                            <p className="movie-overview">{movie.overview}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className={`movie-article-scroll-effect ${premieresHidden?"hidden":""}`}></div>
            <div className={`movie-article-scroll-effect-shadow ${premieresHidden?"hidden":""}`}></div>
            </article>
        </div>
        </>
    );
};

export default MovieDisplay;