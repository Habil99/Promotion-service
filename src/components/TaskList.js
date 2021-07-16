import React from 'react'
import { Link } from 'react-router-dom'
import CardSkeletion from './CardSkeleton'

const TaskList = () => {
    return (
        <div>
            <h4 className="main-wrapper-title">Task list</h4>
            <div className="task-list">
                <div className="task-list-card">
                    <div className="task-list-card-top">
                        <div className="avatar">
                            <img className="avatar-img" src={'/assets/images/avatar-1.svg'} alt="Promotion Service Task" />
                            <div className="task-type-img">
                                <img src={'/assets/images/heart.svg'} alt="Promotion Service Likes Task" />
                            </div>
                        </div>
                        <div>
                            <p className="task-owner-name">
                                Tran Mau Tri Tam
                            </p>
                            <small className="task-type">Like</small>
                        </div>
                        <div className="task-list-card-dropdown">
                            <img src={'/assets/images/ellipsis.svg'} alt="Promotion Service Task List ellipsis" />
                        </div>
                    </div>
                    <div className="task-list-card-img">
                        <img src={'/assets/images/task-1.svg'} alt="Promotion Service Task" />
                    </div>
                    <Link className="action-button">Perform task</Link>
                </div>
                <div className="task-list-card">
                    <div className="task-list-card-top">
                        <div className="avatar">
                            <img className="avatar-img" src={'/assets/images/avatar-2.svg'} alt="Promotion Service Task" />
                            <div className="task-type-img">
                                <img src={'/assets/images/comment.svg'} alt="Promotion Service Likes Task" />
                            </div>
                        </div>
                        <div>
                            <p className="task-owner-name">
                                Anastasia
                            </p>
                            <small className="task-type">Comment</small>
                        </div>
                        <div className="task-list-card-dropdown">
                            <img src={'/assets/images/ellipsis.svg'} alt="Promotion Service Task List ellipsis" />
                        </div>
                    </div>
                    <div className="task-list-card-img">
                        <img src={'/assets/images/task-2.svg'} alt="Promotion Service Task" />
                    </div>
                    <Link className="action-button">Perform task</Link>
                </div>
                <div className="task-list-card">
                    <div className="task-list-card-top">
                        <div className="avatar">
                            <img className="avatar-img" src={'/assets/images/avatar-3.svg'} alt="Promotion Service Task" />
                            <div className="task-type-img">
                                <img src={'/assets/images/heart.svg'} alt="Promotion Service Likes Task" />
                            </div>
                        </div>
                        <div>
                            <p className="task-owner-name">
                                Martin David
                            </p>
                            <small className="task-type">Like</small>
                        </div>
                        <div className="task-list-card-dropdown">
                            <img src={'/assets/images/ellipsis.svg'} alt="Promotion Service Task List ellipsis" />
                        </div>
                    </div>
                    <div className="task-list-card-img">
                        <img src={'/assets/images/task-3.svg'} alt="Promotion Service Task" />
                    </div>
                    <Link className="action-button">Perform task</Link>
                </div>
                <div className="task-list-card">
                    <div className="task-list-card-top">
                        <div className="avatar">
                            <img className="avatar-img" src={'/assets/images/avatar-4.svg'} alt="Promotion Service Task" />
                            <div className="task-type-img">
                                <img src={'/assets/images/followers.svg'} alt="Promotion Service Likes Task" />
                            </div>
                        </div>
                        <div>
                            <p className="task-owner-name">
                                Dwinawan
                            </p>
                            <small className="task-type">Followers</small>
                        </div>
                        <div className="task-list-card-dropdown">
                            <img src={'/assets/images/ellipsis.svg'} alt="Promotion Service Task List ellipsis" />
                        </div>
                    </div>
                    <div className="task-list-card-img">
                        <img src={'/assets/images/task-4.svg'} alt="Promotion Service Task" />
                    </div>
                    <Link className="action-button">Perform task</Link>
                </div>
                <div className="task-list-card">
                    <div className="task-list-card-top">
                        <div className="avatar">
                            <img className="avatar-img" src={'/assets/images/avatar-5.svg'} alt="Promotion Service Task" />
                            <div className="task-type-img">
                                <img src={'/assets/images/heart.svg'} alt="Promotion Service Likes Task" />
                            </div>
                        </div>
                        <div>
                            <p className="task-owner-name">
                                Taras Migulko
                            </p>
                            <small className="task-type">Like</small>
                        </div>
                        <div className="task-list-card-dropdown">
                            <img src={'/assets/images/ellipsis.svg'} alt="Promotion Service Task List ellipsis" />
                        </div>
                    </div>
                    <div className="task-list-card-img">
                        <img src={'/assets/images/task-5.svg'} alt="Promotion Service Task" />
                    </div>
                    <Link className="action-button">Perform task</Link>
                </div>
                <CardSkeletion />
            </div>
        </div>
    )
}

export default TaskList
