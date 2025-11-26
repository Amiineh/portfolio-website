import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Heading, Text, Image, Badge, Flex, Button, AspectRatio } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const MotionBox = motion(Box);

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <Container maxW="container.md" py={20} textAlign="center">
                <Heading>Project not found</Heading>
                <Button mt={4} onClick={() => navigate('/')}>Go Home</Button>
            </Container>
        );
    }

    return (
        <Container maxW="4xl" py={10}>
            <Button
                leftIcon={<FaArrowLeft />}
                variant="ghost"
                mb={8}
                onClick={() => navigate('/')}
            >
                Back to Work
            </Button>

            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Heading as="h1" size="2xl" mb={4}>{project.title}</Heading>

                <Flex gap={2} mb={6} wrap="wrap">
                    {project.tags.map(tag => (
                        <Badge key={tag} fontSize="md" px={3} py={1} borderRadius="full" colorScheme="gray">
                            {tag}
                        </Badge>
                    ))}
                </Flex>

                {project.youtube ? (
                    <AspectRatio ratio={16 / 9} mb={8} borderRadius="xl" overflow="hidden">
                        <iframe
                            title={project.title}
                            src={project.youtube}
                            allowFullScreen
                        />
                    </AspectRatio>
                ) : project.image ? (
                    <Box mb={8} borderRadius="xl" overflow="hidden" boxShadow="lg">
                        <Image src={project.image} alt={project.title} w="full" />
                    </Box>
                ) : null}

                <Box fontSize="lg" lineHeight="tall" color="gray.700" mb={10}>
                    <Text whiteSpace="pre-wrap">{project.fullDescription || project.description}</Text>
                </Box>

                <Flex gap={4}>
                    {project.link && (
                        <Button
                            as="a"
                            href={project.link}
                            target="_blank"
                            rightIcon={<FaExternalLinkAlt />}
                            colorScheme="blackAlpha"
                            bg="black"
                            color="white"
                            _hover={{ bg: 'gray.800' }}
                        >
                            View Original
                        </Button>
                    )}
                    {project.github && (
                        <Button
                            as="a"
                            href={project.github}
                            target="_blank"
                            leftIcon={<FaGithub />}
                            variant="outline"
                        >
                            View Source
                        </Button>
                    )}
                </Flex>
            </MotionBox>
        </Container>
    );
};

export default ProjectDetail;
