import { createContext, useState, useEffect } from 'react';
export const AnimeContext = createContext();

export default function AnimeProvider({ children }) {
    const [animes, setAnimes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAnimes, setFilteredAnimes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    const contextData = {
        animes: filteredAnimes,
        setSearchTerm,
        isLoading
    };

    return (
        <AnimeContext.Provider value={contextData}>
            {children}
        </AnimeContext.Provider>
    );
}
