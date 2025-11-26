import React from 'react';
import { Text } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

const Home = () => {
    return (
        <>
            <Text fontSize="xl" textAlign="center" mt={10}>Welcome</Text>
            <Hero />
            <Portfolio />
        </>
    );
};

export default Home;
