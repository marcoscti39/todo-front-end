import { useEffect, useState } from "react";

export interface INotificationStatus {
  notificationText: string;
  notificationType: "fulfilled" | "rejected";
  isNotificationShowing: boolean;
}

export const useNotification = () => {
  const [notificationStatus, setNotificationStatus] =
    useState<INotificationStatus>({
      notificationText: "",
      notificationType: "fulfilled",
      isNotificationShowing: false,
    });

  const isNotificationShowing = notificationStatus.isNotificationShowing;
  const notificationData = notificationStatus;

  useEffect(() => {
    if (notificationStatus.isNotificationShowing) {
      setTimeout(() => {
        setNotificationStatus({
          ...notificationStatus,
          isNotificationShowing: false,
        });
      }, 1000);
    }
  }, [notificationStatus.isNotificationShowing]);

  const activateNotification = (
    notificationText: string,
    notificationType: "fulfilled" | "rejected"
  ) => {
    setNotificationStatus({
      notificationText,
      notificationType,
      isNotificationShowing: true,
    });
  };

  return { activateNotification, notificationData, isNotificationShowing };
};
