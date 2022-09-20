import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import './App.css';
import { Box, Stack } from '@mui/system';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';

const App = () => {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.error'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
