import { Box, Button, Input, Textarea, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const handleAddNote = () => {
    if (inputTitle && inputContent) {
      setNotes([...notes, { title: inputTitle, content: inputContent }]);
      setInputTitle("");
      setInputContent("");
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Notes</Text>
      <Input
        placeholder="Note Title"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        mb={2}
      />
      <Textarea
        placeholder="Note Content"
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        mb={2}
      />
      <Button onClick={handleAddNote} colorScheme="blue">Add Note</Button>
      <List spacing={3} mt={4}>
        {notes.map((note, index) => (
          <ListItem key={index} d="flex" flexDirection="column">
            <Text fontWeight="bold">{note.title}</Text>
            <Text mb={2}>{note.content}</Text>
            <Button onClick={() => handleDeleteNote(index)} colorScheme="red">Delete</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Notes;