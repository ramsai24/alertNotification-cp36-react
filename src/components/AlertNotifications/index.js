// Write your code here
import Notification from '../Notification'
import './index.css'

const notificationsList = [
  {
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    heading: 'Warning',
    description: 'Viewers of the file can see comments and suggestions',
  },
  {
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="app-container">
    <h1>Alert Notifications</h1>
    <ul>
      {notificationsList.map(each => (
        <Notification key={each.heading}>{each}</Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
