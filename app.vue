<template lang="pug">
IonApp 
  IonRouterOutlet
</template>
<script setup lang="ts">
import { Capacitor } from '@capacitor/core';
     
     
import { PushNotifications } from '@capacitor/push-notifications';
import type {
  ActionPerformed,
  PushNotificationSchema,
  Token,
} from '@capacitor/push-notifications';
const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');
if (isPushNotificationsAvailable) {
  
// Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then((result:any) => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      alert('Push registration success, token: ' + token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );
}

</script>