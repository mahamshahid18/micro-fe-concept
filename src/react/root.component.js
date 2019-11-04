import React from "react"
import { Provider } from 'react-redux';

import { Tasks } from './tasks.component';
import { store } from './state';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <Tasks />
                </Provider>
            </React.Fragment>
        );
    }
}
