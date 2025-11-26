import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, HStack, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box
            as="header"
            position="fixed"
            top="0"
            left="0"
            w="full"
            zIndex="50"
            bg="rgba(255, 255, 255, 0.8)"
            backdropFilter="blur(10px)"
            borderBottom="1px"
            borderColor="gray.100"
        >
            <Flex
                maxW="7xl"
                mx="auto"
                px={6}
                h="20"
                align="center"
                justify="space-between"
            >
                <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
                    <Text fontSize="2xl" fontWeight="bold" letterSpacing="tighter">
                        Amine June
                    </Text>
                </Link>
                <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
                    {['Work', 'About', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            as={RouterLink}
                            to={item === 'Work' ? '/' : `/${item.toLowerCase()}`}
                            fontSize="sm"
                            fontWeight="medium"
                            color="gray.600"
                            _hover={{ color: 'black', textDecoration: 'none' }}
                        >
                            {item}
                        </Link>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
};

export default Header;
