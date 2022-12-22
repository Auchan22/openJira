import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Input,
  FormControlLabel,
  Radio,
  capitalize,
  IconButton,
} from '@mui/material';
import { Layout } from '../../components/layouts';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { EntryStatus } from '../../interfaces';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

const EntryPage = () => {
  return (
    <Layout title='... ... ...'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title='Entrada:'
              subheader={`Creada hace: ... minutos`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Nueva Entrada'
                autoFocus
                multiline
                label='Nueva entrada'
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row>
                  {validStatus.map((s) => (
                    <FormControlLabel
                      key={s}
                      value={s}
                      control={<Radio />}
                      label={capitalize(s)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<LabelImportantIcon />}
                variant='contained'
                fullWidth
              >
                Guardar Card
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark',
        }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </Layout>
  );
};

export default EntryPage;