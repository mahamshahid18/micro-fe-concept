import React from "react"
import { HomeContainer } from './home-container.component';

export class App extends React.Component {

    componentDidCatch() {}

    render() {
        return (
            <React.Fragment>
                <div className='h-100 home-app'>
                    <HomeContainer />
                </div>
                <style>
                    {
                        `
                            .home-app {
                                background-color: #ccf5e5;
                            }
                        `
                    }
                </style>
            </React.Fragment>
        );
    }
}


export default App
