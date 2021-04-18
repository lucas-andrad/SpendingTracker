import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Home from './Pages/Home'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#21be5c"
    },
    secondary: {
      main: "#FFF"
    }
  },
  overrides: {
    MuiListItemText: {
      colorTextPrimary: "#FFF",
      colorTextSecondary: "000"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
