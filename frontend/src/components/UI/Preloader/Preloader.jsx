import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

export const Preloader = (props) => {
  return (
      <Box display="flex" height={80} mt={12}>
        <Box m="auto">
          <CircularProgress size={80}/>
        </Box>
      </Box>
  );
};
export default Preloader;
