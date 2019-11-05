import React from "react"
import { ReactAppActionTypes } from '../react/state';

export const HomeContainer = () => (
    <React.Fragment>
        <div className='px-2 py-2'>
            <p className="w-50">
                When the URL is <b>"localhost:8080/"</b>, the button on this component
                will appear as if doesn't work.
            </p>
            <p className="w-50">
                Navigate to <b>`localhost:8080/tasksComm`</b> to see the communication
                between this micro-app and the one which renders the tasks
            </p>
            <button className="home-add-task-btn py-1" onClick={addTaskToReactApp}>
                Add task to React Tasks App
            </button>
        </div>
        <style>
            {
                `
                    .home-add-task-btn {
                        color: #e5faf2;
                        background-color: #006242;
                        border-radius: 4px;
                        border: 1px solid #006242;
                    }
                `
            }
        </style>
    </React.Fragment>
)

const addTaskToReactApp = () => {
    const msg = {
        dispatchedBy: 'ReactAppHome',
        dispatchedFor: 'ReactAppTasks',
        messageType: ReactAppActionTypes.AddTask,
        payload: {
            text: 'This task has been added by Home Micro-App'
        }
    };

    window.postMessage(msg, '*');
}