import { Box } from '@mui/material';

import KeyboardIcon from '@mui/icons-material/Keyboard';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box
      height="50px"
      px={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      bgcolor="white"
      sx={{ borderTop: '1px solid #ddd', fontSize: '12px' }}
    >
      Made by hungdevjs with
      <KeyboardIcon sx={{ color: 'primary.main', mx: 0.5, fontSize: 18 }} /> and
      <FavoriteIcon sx={{ color: 'error.main', mx: 0.5, fontSize: 18 }} />
    </Box>
  );
};

export default Footer;
