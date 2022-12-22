import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@mui/material';
import { Layout } from '../../components/layouts';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

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
    </Layout>
  );
};

export default EntryPage;
