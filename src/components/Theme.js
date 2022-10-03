import {
  createTheme,
  ThemeProvider,
  
  colors
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[200],
    },
  },
});
export default function Theme() {
  return (
    <ThemeProvider theme={theme}>
      
      <div>
       
      </div>
    </ThemeProvider>
  );
}
