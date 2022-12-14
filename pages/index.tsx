import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <Layout title='Home - Open Jira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader
              title='Pendientes'
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
            />
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader
              title='En progreso'
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader
              title='Finalizadas'
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
            />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
