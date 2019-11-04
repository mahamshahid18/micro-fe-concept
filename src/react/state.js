import { createStore } from 'redux';

const initialState = {
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

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: state.tasks.length,
                        text: action.payload
                    }
                ]
            };
        default:
            return state;
    }
}

export const store = createStore(reducer);