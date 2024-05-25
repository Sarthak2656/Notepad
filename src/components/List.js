import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton, OutlinedInput, InputAdornment, Button } from '@mui/material'; // Importing OutlinedInput and InputAdornment
import DeleteIcon from '@mui/icons-material/Delete';

const ListComponent = () => {
  const [items, setItems] = useState(['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <Box sx={{ mt: 2, p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <OutlinedInput
        placeholder="Enter a New Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        variant="outlined"
        sx={{ mr: 1, width: 'auto' }}
        endAdornment={
          <InputAdornment position="end">
            <Button variant="contained" onClick={addItem} size="large">
              Add
            </Button>
          </InputAdornment>
        }
      />
      <br></br>
      <List sx={{ width: '100%' }}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(index)}>
                <DeleteIcon />
              </IconButton>
            }
            sx={{ display: 'flex', justifyContent: 'flex-start' }} 
          >
            <ListItemText primary={item} sx={{ textAlign: 'left' }} /> {/* Right-aligning the text */}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListComponent;
