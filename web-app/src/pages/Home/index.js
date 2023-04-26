import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import Layout from '../../components/Layout';
import Introduction from './components/Introduction';
import Features from './components/Features';
import GetStarted from './components/GetStarted';
import StartModal from './components/StartModal';

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onStart = () => setOpen(true);
  const onSubmit = (email) => navigate(`/register?email=${email}`);

  return (
    <Layout>
      <StartModal open={open} onClose={onClose} onSubmit={onSubmit} />
      <Box>
        <Introduction />
        <Features />
        <GetStarted onStart={onStart} />
      </Box>
    </Layout>
  );
};

export default Home;
