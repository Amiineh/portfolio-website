import React from 'react';
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const About = () => {
    return (
        <Container maxW="4xl" py={20}>
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Heading as="h1" size="2xl" mb={8}>About Me</Heading>
                <VStack spacing={6} align="start" fontSize="lg" color="gray.600">
                    <Text fontSize="xl" fontWeight="light" lineHeight="tall">
                        Digital Media Artist and AI Engineer using AI to make meaningful art and inspire global change.
                    </Text>
                    <Text>
                        My practice includes Computer Engineering, Neuroscience, AI, Hardware, New Media, and Paintings.
                        I bridge the gap between technology and human experience, creating interactive installations and
                        intelligent systems that explore the complexities of the human brain and the possibilities of
                        artificial intelligence.
                    </Text>
                    <Text>
                        When I get tired of staring at the computer screen, I paint (or play music, but that's another story!).
                        Through painting, I ponder existence, emotional expression, gender identity, and the joys of life.
                        My subjects are myself, my friends, objects or landscapes that I like, or imaginary monsters within.
                    </Text>
                    <Text>
                        I am currently open to collaborations and new opportunities. Feel free to reach out!
                    </Text>
                </VStack>
            </MotionBox>
        </Container>
    );
};

export default About;
