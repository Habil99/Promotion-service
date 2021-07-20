import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../shared/Image'

const TaskListCard = ({ avatar, task_img, type, type_img, owner_name }) => {
    return (
        <div className="task-list-card">
            <div className="task-list-card-top">
                <div className="avatar">
                    <Image source={avatar} />
                    <div className="task-type-img">
                        <Image source={type_img} />
                    </div>
                </div>
                <div>
                    <p className="task-owner-name">
                        {owner_name}
                    </p>
                    <small className="task-type">{type}</small>
                </div>
                <div className="task-list-card-dropdown">
                    <img src={'/assets/images/ellipsis.svg'} alt="Promotion Service Task List ellipsis" />
                </div>
            </div>
            <div className="task-list-card-img">
                <Image source={task_img} />
            </div>
            <Link to="/" className="action-button">Perform task</Link>
        </div>
    )
}

export default TaskListCard
