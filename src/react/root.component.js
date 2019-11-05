import React from "react"
import { Provider } from 'react-redux';

import { Tasks } from './tasks.component';
import { store } from './state';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidCatch() {}

    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <div className="h-100 w-100 py-1 mx-3 react-tasks">
                        <h1 className="mx-3 my-3">
                            React Tasks App
                        </h1>
                        <Tasks />
                    </div>
                </Provider>
                <style>
                    {
                        `
                            .react-tasks {
                                background-color: #ffefcf;
                            }
                        `
                    }
                </style>
            </React.Fragment>
        );
    }
}
