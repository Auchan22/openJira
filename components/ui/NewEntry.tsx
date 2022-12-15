import { Button, TextField } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { ChangeEvent, useContext, useState } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  const [inputValue, setInputValue] = useState<string>('');
  const [touch, setTouch] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setInputValue('');
    setTouch(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginY: 2 }}
            placeholder='Nueva entrada'
            autoFocus
            value={inputValue}
            onChange={handleChange}
            multiline
            helperText={inputValue.length <= 0 && touch && 'Ingrese un valor'}
            label='Entrada'
            error={inputValue.length <= 0 && touch}
            onBlur={() => setTouch(true)}
          />
          <Box display='flex' justifyContent='space-around'>
            <Button
              variant='outlined'
              color='secondary'
              onClick={() => onSave()}
              endIcon={<SaveAltIcon />}
            >
              Guardar
            </Button>
            <Button
              variant='text'
              color='warning'
              endIcon={<DeleteOutlineIcon />}
              onClick={() => setIsAddingEntry(false)}
            >
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          onClick={() => setIsAddingEntry(true)}
          fullWidth
          variant='outlined'
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
