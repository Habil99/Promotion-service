import React from 'react'
import { Link } from 'react-router-dom'

const TaskListCard = ({ avatar, task_img, type, type_img, owner_name }) => {
    return (
        <div className="task-list-card">
            <div className="task-list-card-top">
                <div className="avatar">
                    <img className="avatar-img" src={avatar} alt="Promotion Service Task" />
                    <div className="task-type-img">
                        <img src={type_img} alt="Promotion Service Likes Task" />
                    </div>
                </div>
                <div>
                    <p className="task-owner-name">
                        {owner_name}
                    </p>
                    <small className="task-type">Like</small>
                </div>
                <div className="task-list-card-dropdown">
                    <img src={'/assets/images/ellipsis.svg'} alt="Promotion Service Task List ellipsis" />
                </div>
            </div>
            <div className="task-list-card-img">
                <img src={task_img} alt="Promotion Service Task" />
            </div>
            <Link className="action-button">Perform task</Link>
        </div>
    )
}

export default TaskListCard
