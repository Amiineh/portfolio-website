import React, { useState } from 'react';
import { Box, Heading, Button, SimpleGrid, Flex, Container } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const allTags = ['All', ...new Set(projectsData.flatMap(p => p.tags))];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(p => p.tags.includes(filter));

    return (
        <Box as="section" py={20} id="work">
            <Container maxW="7xl">
                <Box mb={12} textAlign="center">
                    <Heading as="h2" size="xl" mb={4}>Selected Works</Heading>
                    <Flex wrap="wrap" justify="center" gap={2}>
                        {allTags.map(tag => (
                            <Button
                                key={tag}
                                onClick={() => setFilter(tag)}
                                size="sm"
                                variant={filter === tag ? 'solid' : 'ghost'}
                                colorScheme={filter === tag ? 'blackAlpha' : 'gray'}
                                bg={filter === tag ? 'black' : 'transparent'}
                                color={filter === tag ? 'white' : 'gray.600'}
                                _hover={{ bg: filter === tag ? 'black' : 'gray.100' }}
                                borderRadius="full"
                                px={4}
                            >
                                {tag}
                            </Button>
                        ))}
                    </Flex>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} as={motion.div} layout>
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Portfolio;
