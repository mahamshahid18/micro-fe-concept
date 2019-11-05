import { ReactAppActionTypes, store } from './state';

export function messageHandler(message) {
    const messageData = message.data;

    if (!messageData) return;
    if (messageData.dispatchedFor !== 'ReactAppTasks') return;

    processMessage(messageData);
}

function processMessage(message) {
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