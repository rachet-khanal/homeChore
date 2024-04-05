import { getApps, initializeApp, } from "firebase/app"
import { getMessaging, getToken, onMessage, } from "firebase/messaging"

export default defineNuxtPlugin((nuxtApp) => {
  const {public: publicConfig} = useRuntimeConfig()
  const firebaseConfig = {
  apiKey: publicConfig.firebase.apiKey,
  authDomain: publicConfig.firebase.authDomain,
  projectId: publicConfig.firebase.projectId,
  storageBucket: publicConfig.firebase.storageBucket,
  messagingSenderId: publicConfig.firebase.messagingSenderId,
  appId: publicConfig.firebase.appId
  }
  const app = getApps()?.[0] ?? initializeApp(firebaseConfig)

  const messaging = getMessaging(app);

  console.log('Requesting permission...');
  // Need to have if condition to use only on web
  Notification.requestPermission().then((permission) => {
     // Get the token for this device
    getToken(messaging, {
        vapidKey:'BB_tea7YnKfbfhGkl88DMZzCyNGboKJaarcrSFDEZ-vW6Kcx64Kg3r4wTCv7sX3XIpp_LWsCXZnHmfXilfzjCw4'
      }).then((currentToken) => {
        if (currentToken) {
          console.log('FCM token:', currentToken);
          // Send this token to your server to handle notifications
        } else {
          console.error('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.error('An error occurred while retrieving token:', err);
      });
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        onMessage(messaging, (payload) => {
          console.log('fe notification', payload)
          new Notification(payload?.notification?.title ?? 'Notification Received!', {
            body: payload?.notification?.body,
          });
        });
      }
      }).catch((err) => {
        console.error('Unable to get permission to notify.', err);
      });
  
})


