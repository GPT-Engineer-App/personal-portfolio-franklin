import React from "react";
import { Box, VStack, Heading, Text, Image, Divider, Container, Link, Icon } from "@chakra-ui/react";
import { FaWikipediaW, FaBookOpen } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">
            Franklin Piercing - hhahahha
          </Heading>
          <Image src="https://images.unsplash.com/photo-1585075712979-cd3746455fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFua2xpbiUyMHBpZXJjZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzI2MTI5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Franklin Pierce" objectFit="cover" borderRadius="full" boxSize="300px" alignSelf="center" />
          <Text fontSize="xl" textAlign="center">
            14th President of the United States
          </Text>
          <Divider />
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Biography
            </Heading>
            <Text>Franklin Pierce (November 23, 1804 – October 8, 1869) was the 14th president of the United States, serving from 1853 to 1857. He was a northern Democrat who believed that the abolitionist movement was a fundamental threat to the unity of the nation.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Presidency
            </Heading>
            <Text>Pierce was a compromise candidate for the Democratic Party in the 1852 presidential election. His presidency was controversial due to his support of the Kansas–Nebraska Act, which nullified the Missouri Compromise and reopened the question of the expansion of slavery in the American West.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Legacy
            </Heading>
            <Text>Historians and scholars generally rank Pierce as one of the worst presidents in American history. He is criticized for his failure to stem the nation's inter-sectional conflict, which eventually led to Southern secession and the American Civil War.</Text>
          </Box>
          <Divider />
          <VStack spacing={4}>
            <Heading as="h2" size="xl">
              Learn More
            </Heading>
            <Link href="https://en.wikipedia.org/wiki/Franklin_Pierce" isExternal>
              <Icon as={FaWikipediaW} mr={2} />
              Wikipedia
            </Link>
            <Link href="https://www.whitehouse.gov/about-the-white-house/presidents/franklin-pierce/" isExternal>
              <Icon as={FaBookOpen} mr={2} />
              White House Biography
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
