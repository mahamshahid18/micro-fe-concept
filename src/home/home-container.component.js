import React from "react"
import { ReactAppActionTypes } from '../react/state';

export const HomeContainer = () => (
    <React.Fragment>
        <div className='px-2 py-2'>
            <p className="w-50">
                When the URL is `localhost:8080/`, the button on this component
                will appear as if doesn't work.
            </p>
            <p className="w-50">
                Navigate to `localhost:8080/tasksComm` to see the communication
                between this micro-app and the one which renders the tasks
            </p>
            <button onClick={addTaskToReactApp}>
                Add task to React Tasks App
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
            text: 'This task has been added by React Home Micro-App'
        }
    };

    window.postMessage(msg, '*');
}