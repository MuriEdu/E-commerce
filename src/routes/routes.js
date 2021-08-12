import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'

function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Main/>
                </Route>
                <Route  path='/login'>
                    <LoginPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;