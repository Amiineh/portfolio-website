import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Flex direction="column" minH="100vh" bg="white" color="black">
            <Header />
            <Box as="main" flex="1" pt="80px">
                {children}
            </Box>
            <Footer />
        </Flex>
    );
};

export default Layout;
