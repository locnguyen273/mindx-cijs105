import React, { useState } from "react";
import IconPlus from "../../assets/images/icon-plus.svg";
import IconThreeDots from "../../assets/images/icon-three-dots.svg";
import "./style.css";
import TaskItem from "./task-item/task-item";
import { Button, Input } from "antd";
import CreateTask from "./modal/create-task";

const ManageTaskApp = () => {
  const { Search } = Input;
  const [modalCreateTask, setModalCreateTask] = useState(false);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <div className="container">
        <div className="header-section">
          <div className="header-left">
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{ width: 304 }}
            />
          </div>
          <div className="header-right">
            <Button type="primary" onClick={() => setModalCreateTask(true)}>
              New Item
            </Button>
          </div>
        </div>
        <div className="manage-task-app">
          {/* todo column */}
          <div className="todo-column">
            <div className="todo-column-header">
              <div className="todo-column-header-left">
                <p className="label">Todo</p>
                <span className="count">3</span>
              </div>
              <div className="todo-column-header-right">
                <button className="btn-plus">
                  <img src={IconPlus} alt="" />
                </button>
                <button className="btn-ellipsis">
                  <img src={IconThreeDots} alt="" />
                </button>
              </div>
            </div>

            <div className="todo-column-body">
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </div>
          </div>

          <div className="todo-column">
            <div className="todo-column-header">
              <div className="todo-column-header-left">
                <p className="label">Todo</p>
                <span className="count">3</span>
              </div>
              <div className="todo-column-header-right">
                <button className="btn-plus">
                  <img src={IconPlus} alt="" />
                </button>
                <button className="btn-ellipsis">
                  <img src={IconThreeDots} alt="" />
                </button>
              </div>
            </div>

            <div className="todo-column-body">
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </div>
          </div>

          <div className="todo-column">
            <div className="todo-column-header">
              <div className="todo-column-header-left">
                <p className="label">Todo</p>
                <span className="count">3</span>
              </div>
              <div className="todo-column-header-right">
                <button className="btn-plus">
                  <img src={IconPlus} alt="" />
                </button>
                <button className="btn-ellipsis">
                  <img src={IconThreeDots} alt="" />
                </button>
              </div>
            </div>

            <div className="todo-column-body">
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </div>
          </div>

          <div className="todo-column">
            <div className="todo-column-header">
              <div className="todo-column-header-left">
                <p className="label">Todo</p>
                <span className="count">3</span>
              </div>
              <div className="todo-column-header-right">
                <button className="btn-plus">
                  <img src={IconPlus} alt="" />
                </button>
                <button className="btn-ellipsis">
                  <img src={IconThreeDots} alt="" />
                </button>
              </div>
            </div>

            <div className="todo-column-body">
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </div>
          </div>
        </div>
      </div>
      { modalCreateTask && <CreateTask modalCreateTask={modalCreateTask} setModalCreateTask={setModalCreateTask} />}
    </>
  );
};

export default ManageTaskApp;
