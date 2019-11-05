import React from "react"
import { HomeContainer } from './home-container.component';

export class App extends React.Component {

    componentDidCatch() {}

    render() {
        return (
            <React.Fragment>
                <div className='h-100 w-100'>
                    <HomeContainer />
                </div>
            </React.Fragment>
        );
    }
}


export default App
