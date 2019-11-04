import React from "react"
import { connect } from 'react-redux';

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
                <div className="mx-3 my-1">
                    <button onClick={() => addTask('Some random text')}>
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
                type: 'ADD_TASK',
                payload: todoText
            }
        )
    }
}

export const Tasks = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Tasks);