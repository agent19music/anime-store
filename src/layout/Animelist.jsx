import React from 'react';
import { useContext } from 'react';
import { Box, SimpleGrid, Skeleton, Container } from '@chakra-ui/react';
import Anime from '../components/Anime';
import Footer from './Footer';
import { AnimeContext } from '../context/Animecontext';

export default function AnimeList({toggle}) {
  const { isLoading, animes, deleteAnime } = useContext(AnimeContext);

  return (
    <Container maxW="container.xl" bg="green.600" p={4} className='' >
      {isLoading ? (
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
          {Array(8).fill().map((_, index) => (
            <Box key={index} p={6} boxShadow="lg" bg="white">
              <Skeleton height="200px" />
              <Skeleton mt={4} height="40px" />
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Anime animes={animes} deleteAnime={deleteAnime} toggle={toggle} />
      )}
      <Footer />
    </Container>
  );
}
