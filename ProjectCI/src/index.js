import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home'
import login from './login_github'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue400, blue700} from 'material-ui/styles/colors';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
 palette: {
   textColor: blue700,
   primary1Color: blue400,
   primary2Color: blue700
 }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={hashHistory}>
            <Route path="/" component={login}>
                <Route path="App" component={App} >
                    <IndexRoute component={Home} />
                </Route>
            </Route>
        </Router>
   </MuiThemeProvider>
, document.querySelector("#root"));