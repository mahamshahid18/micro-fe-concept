import React from "react"
import { ReactAppActionTypes } from '../react/state';

export const HomeContainer = () => (
    <React.Fragment>
        <div className='px-2 py-2'>
            <button onClick={addTaskToReactApp}>
                Add task to React App
            </button>
            <button>
                Change url in app2
            </button>
        </div>
    </React.Fragment>
)

const addTaskToReactApp = () => {
    const msg = {
        dispatchedBy: 'ReactAppHome',
        dispatchedFor: 'ReactAppTasks',
        messageType: ReactAppActionTypes.AddTask,
        payload: {
            text: 'This task has been added by ReactAppHome'
        }
    };

    window.postMessage(msg, '*');
    console.log('dispatched message');
}