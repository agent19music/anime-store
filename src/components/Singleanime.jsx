import { useContext} from 'react'
import Updateanime from '../pages/Updateanime'
import { useParams } from 'react-router-dom'
import { AnimeContext } from '../context/Animecontext'

export default function Singleanime() {
    const {animes} = useContext(AnimeContext) 
    const {title} = useParams()
    const selectedAnime = animes.find((anime) => anime.title === title);

    if (!selectedAnime) {
      return <div>Anime not found</div>;
    }   
   
  return (
    <div>
        
        <Updateanime anime={selectedAnime}/>
        </div>
  )
}
