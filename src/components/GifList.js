
function GifList({giphys}){
    return(
        <div>
          <h3>Search Gifs to see</h3> 
          <ul>
                {giphys.map((giphy) =>(
                    <li key={giphy.id} >
                    
                    <img src={giphy.images.original.url} alt={giphy.title}/>

                    </li>
                ))}
           </ul> 
          
        </div>
    )
}

export default GifList;