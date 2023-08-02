import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {User, Home } from './User';
import { Profile } from './components/profile/Profile';
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
   //theme apply
  const theme = createTheme({
  palette: {
    primary: {
      light: "#a2d345",
      main: "#00568e",
      dark: "#619510",
      contrastText: "#ffffab",
    },
    secondary: {
      light: "#6e7b86",
      main: "#f48fb1",
      dark: "#333e48",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#4c5b68",
    },
  },
  typography: {
    h1: {
      fontSize: "36px",
      textAlign: "center",
      lineHeight: "1.2",
      marginBottom: "45px",
      fontWeight: 700,

      paddingBottom: "18px",
      position: "relative",
      letterSpacing: "0px",
      "&:after": {
        position: "absolute",
        content: " '' ",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "0",
        height: "2px",
        width: "165px",
        
      }
    }
  }
})
  const userName ='I am Harsh and I am';
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User name={userName} age={21} />}/>
      <Route path='/Profile' element={<Profile/>}/>
     </Routes>
    </div>
   
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
