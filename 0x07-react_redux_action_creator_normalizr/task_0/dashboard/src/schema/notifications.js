import { getAllNotificationsByUser } from './notifications'

export default getAllNotificationsByUser
        .map(notification => notification.context)
}

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, { idAttribute: "guid" })
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
})

export const normalizedData = normalize(notificationList, [notification]
