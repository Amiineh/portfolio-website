import React, { useEffect, useRef } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import p5 from 'p5';

const Hero = () => {
    const sketchRef = useRef();

    useEffect(() => {
        const sketch = (p) => {
            let particles = [];
            const particleCount = 100;
            const connectionDistance = 100;

            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent(sketchRef.current);
                p.style('display', 'block');
                p.style('position', 'absolute');
                p.style('top', '0');
                p.style('left', '0');
                p.style('z-index', '-1');

                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle(p));
                }
            };

            p.draw = () => {
                p.background(255);

                // Update and display particles
                particles.forEach(particle => {
                    particle.update();
                    particle.display();
                    particle.checkMouse(p.mouseX, p.mouseY);
                });

                // Draw connections
                p.stroke(200);
                p.strokeWeight(0.2);
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        let d = p.dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
                        if (d < connectionDistance) {
                            p.line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
                        }
                    }
                }
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };

            class Particle {
                constructor(p) {
                    this.p = p;
                    this.pos = p.createVector(p.random(p.width), p.random(p.height));
                    this.vel = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
                    this.size = 4;
                    this.baseColor = p.color(0);
                }

                update() {
                    this.pos.add(this.vel);
                    if (this.pos.x < 0 || this.pos.x > this.p.width) this.vel.x *= -1;
                    if (this.pos.y < 0 || this.pos.y > this.p.height) this.vel.y *= -1;
                }

                display() {
                    this.p.noStroke();
                    this.p.fill(this.baseColor);
                    this.p.ellipse(this.pos.x, this.pos.y, this.size);
                }

                checkMouse(mx, my) {
                    let d = this.p.dist(mx, my, this.pos.x, this.pos.y);
                    if (d < 150) {
                        let force = this.p.createVector(this.pos.x - mx, this.pos.y - my);
                        force.setMag(0.5); // Repulsion strength
                        this.vel.add(force);
                        this.vel.limit(2);
                    }
                }
            }
        };

        const myP5 = new p5(sketch);

        return () => {
            // myP5.remove();
        };
    }, []);

    return (
        <Box position="relative" h="20vh" w="full" overflow="hidden">
            <Box ref={sketchRef} position="absolute" inset="0" />
            <Flex
                position="relative"
                zIndex="10"
                h="full"
                align="center"
                justify="center"
                direction="column"
                textAlign="center"
                pointerEvents="none"
            >
                <Heading
                    as="h1"
                    fontSize={{ base: '6xl', md: '8xl' }}
                    fontWeight="light"
                    letterSpacing="tighter"
                    mb={4}
                    mixBlendMode="difference"
                    color="black"
                >
                    Amine June
                </Heading>
                <Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight="light"
                    color="gray.600"
                    letterSpacing="wide"
                >
                    Computer (AI) Engineer • Artist • Researcher
                </Text>
            </Flex>
        </Box>
    );
};

export default Hero;
