import { React, useContext } from 'react';
import { Box, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react';
import Anime from '../components/Anime';
import Footer from './Footer';
import { AnimeContext } from '../context/Animecontext';

export default function Animelist({ deleteAnime, toggle }) {
  const { isLoading, animes } = useContext(AnimeContext);

  return (
    <div className='container'>
      {isLoading && (
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          {Array(8).fill().map((_, index) => (
            <Box key={index} padding="6" boxShadow="lg" bg="white">
              <Skeleton height="200px" />
              <Skeleton mt="4" height="40px" />
            </Box>
          ))}
        </SimpleGrid>
      )}
      {!isLoading && <Anime animes={animes} deleteAnime={deleteAnime} toggle={toggle} />}
      <Footer />
    </div>
  );
}
