import React from "react";
import { INotificationStatus } from "../hooks/useNotification";

const Notification: React.FC<INotificationStatus> = ({
  notificationText,
  notificationType,
}) => {
  return (
    <div>
      <p
        style={{
          color: `${notificationType === "fulfilled" ? "#12e612" : "red"}`,
        }}
      >
        {notificationText}
      </p>
    </div>
  );
};

export default Notification;
