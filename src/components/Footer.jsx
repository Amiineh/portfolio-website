import React from 'react';
import { Box, Flex, Text, HStack, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGoogleScholar, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FaGoogleScholar, href: 'https://scholar.google.com', label: 'Google Scholar' },
        { icon: FaEnvelope, href: 'mailto:email@example.com', label: 'Email' },
    ];

    return (
        <Box as="footer" py={12} borderTop="1px" borderColor="gray.100" mt="auto">
            <Flex
                maxW="7xl"
                mx="auto"
                px={6}
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="center"
                gap={6}
            >
                <Text fontSize="sm" color="gray.500">
                    © {new Date().getFullYear()} Amine June. All rights reserved.
                </Text>
                <HStack spacing={6}>
                    {socialLinks.map(({ icon: IconComp, href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            isExternal
                            color="gray.400"
                            _hover={{ color: 'black' }}
                            aria-label={label}
                        >
                            <Icon as={IconComp} boxSize={5} />
                        </Link>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
};

export default Footer;
