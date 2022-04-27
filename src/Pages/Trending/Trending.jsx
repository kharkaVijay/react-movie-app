import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import SingleContent from "../../Components/SingleContent/SingleContent";
import "./Trending.css"
// import './App.css';

const Trending = () => {
    const [content, setContent] = useState([]); 
    const [page,setPage]  = useState(1);

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=c485233ee73ea6e1578b32316b96d2c8&page=${page}`)

        // console.log(data)

        setContent(data.results)
    }

    useEffect(() => {
        fetchTrending()
    }, [page])

    return (    
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {content && content.map((c)=>{
                    //    console.dir(c)
                   return  <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date}  media_type={c.media_type} vote_average={c.vote_average}/>
                    
                })}       
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending;