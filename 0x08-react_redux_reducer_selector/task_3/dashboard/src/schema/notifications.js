import normalizedData from '../../../../notifications.json'

const getAllNotificationsByUser = (userId) => {
  const userNotifications = []

  // Assuming 'result' contains all notification IDs
  for (const notificationId of normalizedData.result) {
    const notification = normalizedData.entities.notifications[notificationId]
    
    if (notification.author === userId) {
      userNotifications.push(notification.context)
    }
  }

  return userNotifications
}

export default getAllNotificationsByUser
