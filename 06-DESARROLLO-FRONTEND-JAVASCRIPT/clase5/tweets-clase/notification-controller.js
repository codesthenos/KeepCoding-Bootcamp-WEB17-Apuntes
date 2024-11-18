import { buildNotification } from "./notification-view.js";

export function notificationController(notificationContainer) {

  const showNotification = (message, type = "success") => {
    
    notificationContainer.innerHTML = buildNotification(message, type);

    if (type === 'success') {
      setTimeout(() => {
        notificationContainer.innerHTML = ''
      }, 4000)
    }
  }
  return { showNotification }
}