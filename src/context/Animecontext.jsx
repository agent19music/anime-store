import { createContext, useState, useEffect } from 'react';
export const AnimeContext = createContext();
import PropTypes from 'prop-types'; // Add this line
import Swal from 'sweetalert2';


export default function AnimeProvider({ children }) {
    const [animes, setAnimes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAnimes, setFilteredAnimes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkmode, setIsDarkmode] = useState(true)

    const[mycart, setMyCart] = useState([])

     const toggle = isDarkmode ? ' bg-dark text-white' : 'bg-light text-black'
     const toggle2 = isDarkmode ? 'dark':'light';
     const toggle3 = isDarkmode ? 'white': 'black'

     const toggleDarkMode = () => {
      setIsDarkmode(!isDarkmode);
      };
  



    useEffect(() => {
        setIsLoading(true); // Ensure loading state is true before fetching
        fetch('https://anime-store-db.onrender.com/animes')
            .then((res) => res.json())
            .then((res) => {
                setAnimes(res);
                setFilteredAnimes(res); // Set filteredAnimes initially
                setIsLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setAnimes([]);
                setFilteredAnimes([]); // Set filteredAnimes to empty array on error
                setIsLoading(false); // Ensure loading is set to false even if there's an error
            });
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const lowerCaseQuery = searchTerm.toLowerCase();
            const filtered = animes.filter(anime =>
                anime.title.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredAnimes(filtered);
        } else {
            setFilteredAnimes(animes);
        }
    }, [animes, searchTerm]);

    function addToCart(merchandise){
        if(!mycart.find((newguy)=> newguy.image===merchandise.image)){
         setMyCart([...mycart,merchandise]) 
         Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item has been added to cart",
          showConfirmButton: false,
          timer: 900
        });
        }}

        function removeFromCart (merchandise){
            const newmycart = mycart.filter((newguy) => newguy.image !== merchandise.image);
            setMyCart(newmycart);
            Swal.fire({
             position: "top-end",
             icon: "success",
             title: "Item has been removed from cart",
             showConfirmButton: false,
             timer: 900
           });
            
           }    

    const contextData = {
        animes: filteredAnimes,
        setSearchTerm,
        isLoading,
        addToCart,
        removeFromCart,
        toggle,
        toggle2,
        toggle3,
        toggleDarkMode,
        setMyCart
    };

    

    return (
        <AnimeContext.Provider value={contextData}>
            {children}
        </AnimeContext.Provider>
    );
}

// Add prop type validation
AnimeProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };