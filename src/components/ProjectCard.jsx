import React from 'react';
import { Box, Image, Badge, Text, Link, Flex, VStack, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const ProjectCard = ({ project }) => {
    return (
        <MotionBox
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="sm"
            _hover={{ boxShadow: 'md' }}
            borderWidth="1px"
            borderColor="gray.100"
            position="relative"
            role="group"
        >
            <Link as={RouterLink} to={`/project/${project.id}`} _hover={{ textDecoration: 'none' }}>
                <Box aspectRatio={16 / 9} bg="gray.100" overflow="hidden">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            w="full"
                            h="full"
                            objectFit="cover"
                            transition="transform 0.5s"
                            _groupHover={{ transform: 'scale(1.05)' }}
                        />
                    ) : (
                        <Flex w="full" h="full" align="center" justify="center" color="gray.400" bg="gray.50">
                            No Image
                        </Flex>
                    )}
                </Box>
            </Link>

            <VStack align="start" p={6} spacing={3}>
                <Flex wrap="wrap" gap={2}>
                    {project.tags?.map(tag => (
                        <Badge key={tag} variant="subtle" colorScheme="gray" borderRadius="full" px={2}>
                            {tag}
                        </Badge>
                    ))}
                </Flex>
                <Link as={RouterLink} to={`/project/${project.id}`} _hover={{ textDecoration: 'none' }}>
                    <Heading as="h3" size="md" _groupHover={{ color: 'gray.600' }} transition="color 0.2s">
                        {project.title}
                    </Heading>
                </Link>
                <Text color="gray.500" fontSize="sm" noOfLines={3}>
                    {project.description}
                </Text>

                <Flex w="full" pt={4} borderTopWidth="1px" borderColor="gray.50" justify="space-between" align="center">
                    <Link
                        as={RouterLink}
                        to={`/project/${project.id}`}
                        fontSize="sm"
                        fontWeight="medium"
                        color="black"
                        _hover={{ textDecoration: 'underline' }}
                    >
                        View Details
                    </Link>
                </Flex>
            </VStack>
        </MotionBox>
    );
};

export default ProjectCard;
