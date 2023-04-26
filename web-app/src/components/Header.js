import { Box, Typography } from '@mui/material';

import useAppContext from '../hooks/useAppContext';

const Header = () => {
  const {
    responsiveState: { isMobile },
  } = useAppContext();

  return (
    <Box
      height="70px"
      px={2}
      display="flex"
      alignItems="center"
      justifyContent={isMobile ? 'center' : 'flex-start'}
      sx={{ borderBottom: `1px solid #ddd` }}
    >
      <Typography fontSize="24px" fontWeight={600}>
        Cloudify
      </Typography>
    </Box>
  );
};

export default Header;
