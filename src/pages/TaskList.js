import React from "react";
import { Link } from "react-router-dom";
import CardSkeletion from "../components/CardSkeleton";
import TaskListCard from "../components/TaskList/Card";

const TaskList = () => {
  return (
    <div>
      <div className="task-list-top">
        <h4 className="main-wrapper-title">Task list</h4>
        <Link to="/create-task" className="create-task">
          + Create task
        </Link>
      </div>
      <div className="task-list">
        <TaskListCard
          avatar={"/assets/images/avatar-1.svg"}
          type={"Like"}
          type_img={"/assets/images/heart.svg"}
          task_img={"/assets/images/task-1.svg"}
          owner_name={"Tran Mau Tri Tam"}
        />
        <TaskListCard
          avatar={"/assets/images/avatar-2.svg"}
          type={"Comment"}
          type_img={"/assets/images/comment.svg"}
          task_img={"/assets/images/task-2.svg"}
          owner_name={"Anastasia"}
        />
        <TaskListCard
          avatar={"/assets/images/avatar-3.svg"}
          type={"Like"}
          type_img={"/assets/images/heart.svg"}
          task_img={"/assets/images/task-3.svg"}
          owner_name={"Martin David"}
        />
        <TaskListCard
          avatar={"/assets/images/avatar-4.svg"}
          type={"Followers"}
          type_img={"/assets/images/followers.svg"}
          task_img={"/assets/images/task-4.svg"}
          owner_name={"Dwinawan"}
        />
        <TaskListCard
          avatar={"/assets/images/avatar-5.svg"}
          type={"Like"}
          type_img={"/assets/images/heart.svg"}
          task_img={"/assets/images/task-5.svg"}
          owner_name={"Taras Migulko"}
        />
        <CardSkeletion />
        <TaskListCard
          avatar={"/assets/images/avatar-3.svg"}
          type={"Like"}
          type_img={"/assets/images/heart.svg"}
          task_img={"/assets/images/task-3.svg"}
          owner_name={"Martin David"}
        />
        <TaskListCard
          avatar={"/assets/images/avatar-4.svg"}
          type={"Followers"}
          type_img={"/assets/images/followers.svg"}
          task_img={"/assets/images/task-4.svg"}
          owner_name={"Dwinawan"}
        />
        <TaskListCard
          avatar={"/assets/images/avatar-5.svg"}
          type={"Like"}
          type_img={"/assets/images/heart.svg"}
          task_img={"/assets/images/task-5.svg"}
          owner_name={"Taras Migulko"}
        />
      </div>
    </div>
  );
};

export default TaskList;
