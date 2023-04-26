import { Box, Grid, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import StorageIcon from '@mui/icons-material/Storage';
import DownloadIcon from '@mui/icons-material/Download';
import SecurityIcon from '@mui/icons-material/Security';

const features = [
  { text: 'Global access', icon: PublicIcon },
  { text: '5TB of cloud space', icon: StorageIcon },
  { text: 'Unlimited speed', icon: DownloadIcon },
  { text: '100% secure', icon: SecurityIcon },
];

const Features = () => {
  return (
    <Box
      py={8}
      px={2}
      bgcolor="#f8f8f8"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box width="900px" maxWidth="100%">
        <Grid container spacing={2}>
          {features.map((feature) => (
            <Grid key={feature.text} item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <feature.icon sx={{ fontSize: 50 }} />
                <Typography fontWeight={300} color="#555" align="center">
                  {feature.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
