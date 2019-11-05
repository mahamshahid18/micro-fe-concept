import React from "react"
import { connect } from 'react-redux';

import { ReactAppActionTypes } from './state';

class _Tasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks, addTask } = this.props;

        return (
            <React.Fragment>
                <div className='task-container'>
                    <ul>
                        {
                            tasks.map((task) => (
                                <li key={task.id} className="py-1">
                                    <span className="px-2">
                                        { task.id }
                                    </span>
                                    <span>
                                        { task.text }
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mx-3 my-2">
                    <button className="add-task-btn py-1" onClick={() => addTask('Some random text')}>
                        Add random task
                    </button>
                </div>
                <style>
                    {
                        `
                            .task-container {
                                padding-left: 0.5rem;
                                padding-right: 0.5rem;
                            }

                            .add-task-btn {
                                color: #fff6e6;
                                background-color: #ff8f00;
                                border-radius: 4px;
                                border: 1px solid #ff8f00;
                            }
                        `
                    }
                </style>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTask: (todoText) => dispatch(
            {
                type: ReactAppActionTypes.AddTask,
                payload: {
                    text: todoText
                }
            }
        )
    }
}

export const Tasks = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Tasks);