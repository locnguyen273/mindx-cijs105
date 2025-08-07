import React from 'react'
import IconEdit from "../../../assets/images/icon-edit-pencil.svg"
import IconAttach from "../../../assets/images/icon-paperclip.svg"
import IconFlag from "../../../assets/images/icon-flag.svg"
import IconClock from "../../../assets/images/icon-clock.svg"
import "./style.css"

const TaskItem = () => {
  return (
    <div className='task-item'>
      <div className="task-item-header">
        <p className="left">Mobile Wireframes</p>
        <button> <img src={IconEdit} alt="icon pencil" /></button>
      </div>
      <div className="task-item-body">
        <p className='description'>Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiên</p>
        <button>MindX School</button>
      </div>
      <div className="task-item-footer">
        <div className='list-file-attach'>
          <div>
            <img src={IconAttach} alt="" />
            <span>3</span>
          </div>
          <div>
            <img src={IconFlag} alt="" />
          </div>
          <div>
            <img src={IconClock} alt="" />
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskItem