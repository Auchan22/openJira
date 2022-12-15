import { Button, TextField } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { ChangeEvent, useState } from 'react';

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>('');
  const [touch, setTouch] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
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
              endIcon={<SaveAltIcon />}
            >
              Guardar
            </Button>
            <Button
              variant='text'
              color='warning'
              endIcon={<DeleteOutlineIcon />}
              onClick={() => setIsAdding(false)}
            >
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          onClick={() => setIsAdding(true)}
          fullWidth
          variant='outlined'
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
