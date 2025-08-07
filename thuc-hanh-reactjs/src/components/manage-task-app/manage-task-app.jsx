import React from 'react'
import IconPlus from "../../assets/images/icon-plus.svg"
import IconThreeDots from "../../assets/images/icon-three-dots.svg"
import "./style.css"
import TaskItem from './task-item/task-item'

const ManageTaskApp = () => {
  return (
    <div className='manage-task-app'>
      
      {/* todo column */}
      <div className='todo-column'>
        <div className='todo-column-header'>
          <div className='todo-column-header-left'>
            <p className='label'>Todo</p>
            <span className='count'>3</span>
          </div>
          <div className='todo-column-header-right'>
            <button className='btn-plus'><img src={IconPlus} alt="" /></button>
            <button className='btn-ellipsis'><img src={IconThreeDots} alt="" /></button>
          </div>
        </div>

        <div className='todo-column-body'>
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
      </div>

      <div className='todo-column'></div>
      <div className='todo-column'></div>
      <div className='todo-column'></div>
    </div>
  )
}

export default ManageTaskApp