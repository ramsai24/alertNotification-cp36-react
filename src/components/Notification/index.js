// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  const {heading, description} = children

  switch (heading) {
    case 'Success':
      return (
        <div className="notification-item">
          <AiFillCheckCircle />
          <div className="heading-description-container">
            <h1 className="heading">{heading}</h1>
            <p className="description">{description}</p>
          </div>
          <GrFormClose className="close-icon" />
        </div>
      )
    case 'Error':
      return (
        <div className="notification-item">
          <RiErrorWarningFill />
          <div className="heading-description-container">
            <h1 className="heading">{heading}</h1>
            <p className="description">{description}</p>
          </div>
          <GrFormClose className="close-icon" />
        </div>
      )
    case 'Warning':
      return (
        <div className="notification-item">
          <MdWarning />
          <div className="heading-description-container">
            <h1 className="heading">{heading}</h1>
            <p className="description">{description}</p>
          </div>
          <GrFormClose className="close-icon" />
        </div>
      )
    case 'Info':
      return (
        <div className="notification-item">
          <MdInfo />
          <div className="heading-description-container">
            <h1 className="heading">{heading}</h1>
            <p className="description">{description}</p>
          </div>
          <GrFormClose className="close-icon" />
        </div>
      )
    default:
      return null
  }
}

export default Notification
