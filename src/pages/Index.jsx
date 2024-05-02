import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box p={4} d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100vh">
      <Heading mb={8}>Welcome to the Task Manager</Heading>
      <VStack spacing={4}>
        <Link to="/todo">
          <Button colorScheme="teal">Todo List</Button>
        </Link>
        <Link to="/notes">
          <Button colorScheme="orange">Notes</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;