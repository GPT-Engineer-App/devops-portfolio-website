import { useState } from "react";
import { ChakraProvider, Box, Container, VStack, HStack, Text, Button, IconButton, Image, Link, Input, Textarea, SimpleGrid } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaBriefcase, FaFileAlt, FaBlog, FaProjectDiagram, FaPhone } from "react-icons/fa";

const pages = {
  home: "Home",
  about: "About",
  portfolio: "Portfolio",
  resume: "Resume",
  blog: "Blog",
  contact: "Contact",
  projects: "Projects",
};

const NavBar = ({ setPage }) => (
  <HStack spacing={4} mb={8}>
    {Object.entries(pages).map(([key, label]) => (
      <Button key={key} leftIcon={<FaHome />} onClick={() => setPage(key)}>
        {label}
      </Button>
    ))}
  </HStack>
);

const Home = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">Welcome to My DevOps Portfolio</Text>
    <Text>Explore my work and get to know more about me.</Text>
  </VStack>
);

const About = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">About Me</Text>
    <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZPcHMlMjBlbmdpbmVlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzEwMDI0MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="DevOps Engineer" borderRadius="full" boxSize="150px" />
    <Text>I am a passionate DevOps engineer with experience in automating and optimizing mission-critical deployments in AWS, CI/CD, and monitoring systems.</Text>
  </VStack>
);

const Portfolio = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">Portfolio</Text>
    <Text>Here are some of the projects I've worked on:</Text>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1667709525632-ca0ce065951d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMXxlbnwwfHx8fDE3MTcxMDAyNDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
        <Text mt={2}>Project 1</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMnxlbnwwfHx8fDE3MTcxMDAyNDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
        <Text mt={2}>Project 2</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwM3xlbnwwfHx8fDE3MTcxMDAyNDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" />
        <Text mt={2}>Project 3</Text>
      </Box>
    </SimpleGrid>
  </VStack>
);

const Resume = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">Resume</Text>
    <Text>
      Download my resume{" "}
      <Link href="https://images.unsplash.com/photo-1549923746-9507eec27243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN1bWUlMjBsaW5rfGVufDB8fHx8MTcxNzEwMDI0Mnww&ixlib=rb-4.0.3&q=80&w=1080" color="teal.500">
        here
      </Link>
      .
    </Text>
  </VStack>
);

const Blog = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">Blog</Text>
    <Text>Read my latest blog posts:</Text>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Text fontSize="lg">Blog Post 1</Text>
      <Text mt={2}>An introduction to Kubernetes.</Text>
    </Box>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Text fontSize="lg">Blog Post 2</Text>
      <Text mt={2}>CI/CD pipelines with Jenkins.</Text>
    </Box>
  </VStack>
);

const Contact = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">Contact Me</Text>
    <Input placeholder="Your Name" />
    <Input placeholder="Your Email" />
    <Textarea placeholder="Your Message" />
    <Button leftIcon={<FaEnvelope />} colorScheme="teal">
      Send Message
    </Button>
  </VStack>
);

const Projects = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">Projects</Text>
    <Text>Here are some of the projects I've worked on:</Text>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1559571509-1b5c9241070b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9qZWN0JTIwMXxlbnwwfHx8fDE3MTcxMDAyNDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
        <Text mt={2}>Project 1</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1560328430-67f6e0ea63f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9qZWN0JTIwMnxlbnwwfHx8fDE3MTcxMDAyNDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
        <Text mt={2}>Project 2</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1529909746513-b540c1680fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9qZWN0JTIwM3xlbnwwfHx8fDE3MTcxMDAyNDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" />
        <Text mt={2}>Project 3</Text>
      </Box>
    </SimpleGrid>
  </VStack>
);

const Index = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      case "projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" py={8}>
        <NavBar setPage={setPage} />
        {renderPage()}
      </Container>
    </ChakraProvider>
  );
};

export default Index;
