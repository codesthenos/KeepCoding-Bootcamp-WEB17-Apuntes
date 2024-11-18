import { buildNotification } from "./notification-view.js";

export function notificationController(notificationContainer) {

  const showNotification = message => {
    notificationContainer.innerHTML = buildNotification(message);
  }
  return { showNotification }
}