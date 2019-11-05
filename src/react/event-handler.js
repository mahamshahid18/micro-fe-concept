import { ReactAppActionTypes, store } from './state';

export function messageHandler(message) {
    console.log(message);
    if (message.dispatchedFor !== 'ReactAppTasks') return;

    processMessage(message);
}

function processMessage(message) {
    console.log('dispatching action');
    switch(message.messageType) {
        case ReactAppActionTypes.AddTask: {
            return store.dispatch(
                {
                    type: ReactAppActionTypes.AddTask,
                    payload: message.payload
                }
            )
        }
    }
}