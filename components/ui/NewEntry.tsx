import { Button, TextField } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button startIcon={<AddIcon />} fullWidth variant='outlined'>
        Agregar Tarea
      </Button>
      <TextField
        fullWidth
        sx={{ marginY: 2 }}
        placeholder='Nueva entrada'
        autoFocus
        multiline
        label='Entrada'
      />
      <Box display='flex' justifyContent='space-around'>
        <Button variant='outlined' color='secondary' endIcon={<SaveAltIcon />}>
          Guardar
        </Button>
        <Button variant='text' color='warning' endIcon={<DeleteOutlineIcon />}>
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};
