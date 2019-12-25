import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import Admin from "./Admin"

class MyRouter extends React.Component {
    render() {
        return (
            <HashRouter >
                <App>
                    <Route path="/login" />
                    <Route path="/" render={() =>
                        <Admin>
                            <Switch>

                            </Switch>
                        </Admin>
                    } />
                </App>
            </HashRouter>
        )
    }
}

export default MyRouter