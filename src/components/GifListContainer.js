import React,{useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer(){

  const [giphys,setGiphys] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);


  useEffect (() =>{
    fetchGiphys();
  }, []);

  const fetchGiphys = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=pzmzXaNV7ik3lVeDaFNb7CHU2XNxqSq3&rating=g&limit=3`
    try{
        const response = await fetch(url);
        if(!response.ok){
           throw new Error('Error fetching data');
        }

        const data = await response.json();
        console.log(data.data);

        setGiphys(data.data)

    }catch(error){
        console.error('Error fetching giphys:', error);

    }
  }

  const handleSearchTerm = (searchTerm) =>{
    
    fetchGiphys(searchTerm);

  }



    return(
        <div className="container">
          <div className="row">
            <div className="col-md-8">
             <GifList giphys={giphys}/>
            </div>
            <div className="col-md-4">
             <GifSearch onSubmit={handleSearchTerm} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
            
          </div>
            
        </div>
    )
}

export default GifListContainer;