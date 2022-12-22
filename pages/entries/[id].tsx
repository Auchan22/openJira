import { useState, ChangeEvent, useMemo, FC } from 'react';
import { GetServerSideProps } from 'next';

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
import { Entry, EntryStatus } from '../../interfaces';
import mongoose from 'mongoose';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
  props: string;
}

const EntryPage: FC<Props> = (props) => {
  console.log(props);
  const [inputValue, setInputValue] = useState<string>('');
  const [status, setStatus] = useState<EntryStatus>('pending');
  const [touched, setTouched] = useState<boolean>(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched],
  );

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  };

  const onSave = () => {};

  return (
    <Layout title='... ... ...'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creada hace: ... minutos`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                value={inputValue}
                placeholder='Nueva Entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                onChange={onInputChange}
                helperText={isNotValid && 'Ingrese un valor'}
                onBlur={() => setTouched(true)}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row onChange={onStatusChange} value={status}>
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
                onClick={onSave}
                disabled={inputValue.length <= 0}
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  if (!mongoose.isValidObjectId(id)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      id,
    },
  };
};

export default EntryPage;
