import React from 'react';
import {connect} from 'react-redux';
import {CREATE_TASK, REQUEST_TASK_CREATION, requestTaskCreation} from "../store/mutations";
import {Link} from "react-router-dom";

export const TaskList = ({tasks, name, owner, id, createNewTask, match}) => (
    <div className="card p-2 m-2">
        <div>
            <h3>{name}</h3>
            <p>{owner}</p>

        </div>
        <div>
            {tasks.map(task => (
                <Link key={task.id} to={`/task/${task.id}`}>
                    <div className="card p-2 mt-2">
                        {task.name}
                    </div>
                </Link>
            ))}
        </div>
        <button onClick={() => createNewTask(id)} className="btn btn-primary btn-block mt-2">Add New</button>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask(id) {
            console.log("Creating new task...", id);
            dispatch(requestTaskCreation(id))
        }
    }
};

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);
