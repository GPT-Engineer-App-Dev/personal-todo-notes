import { Box, Button, Input, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Todo List</Text>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        mb={2}
      />
      <Button onClick={handleAddTask} colorScheme="blue">Add Task</Button>
      <List spacing={3} mt={4}>
        {tasks.map((task, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            {task}
            <Button onClick={() => handleDeleteTask(index)} colorScheme="red">Delete</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Todo;