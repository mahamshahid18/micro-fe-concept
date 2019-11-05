import { createStore } from 'redux';

export const initialState = {
    tasks: [
        {
            id: 0,
            text: 'Do something'
        },
        {
            id: 1,
            text: 'Do another something'
        }
    ]
};

export const ReactAppActionTypes = {
    AddTask: 'ADD_TASK'
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ReactAppActionTypes.AddTask:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: state.tasks.length,
                        text: action.payload.text
                    }
                ]
            };
        default:
            return state;
    }
}

export const store = createStore(reducer);