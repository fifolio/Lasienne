import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Countdown from '../Countdown/Countdown';

export default function CircularIndeterminate() {
  return (
    <>
      <Box sx={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Countdown />
        <CircularProgress />
      </Box>
    </>
  );
}
