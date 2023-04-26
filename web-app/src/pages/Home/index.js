import { Box } from '@mui/material';

import Layout from '../../components/Layout';
import Introduction from './components/Introduction';
import Features from './components/Features';
import GetStarted from './components/GetStarted';

const Home = () => {
  return (
    <Layout>
      <Box>
        <Introduction />
        <Features />
        <GetStarted />
      </Box>
    </Layout>
  );
};

export default Home;
