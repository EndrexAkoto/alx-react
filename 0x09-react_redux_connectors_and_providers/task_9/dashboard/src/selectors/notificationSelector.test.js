import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector'

describe('notificationSelector', () => {
  const state = {
    notifications: {
      filter: 'DEFAULT',
      messages: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        // More notifications...
      }
    }
  }

  test('filterTypeSelected works as expected', () => {
    const filterType = filterTypeSelected(state)
    expect(filterType).toEqual('DEFAULT')
  })

  test('getNotifications returns a list of the message entities within the reducer', () => {
    const notifications = getNotifications(state)
    expect(notifications.size).toBe(Object.keys(state.notifications.messages).length)
    expect(notifications.get('1')).toEqual(state.notifications.messages['1'])
  })

  test('getUnreadNotifications return a list of the message entities within the reducer', () => {
    const unreadNotifications = getUnreadNotifications(state)
    const unreadCount = Object.values(state.notifications.messages).filter(message => !message.isRead).length
    expect(unreadNotifications.size).toBe(unreadCount)
  })
})
