import { getApps, initializeApp } from "firebase/app"

// import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin((nuxtApp) => {
  const {public: publicConfig} = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: publicConfig.firebase.apiKey,
    authDomain: publicConfig.firebase.authDomain,
    projectId: publicConfig.firebase.projectId,
    storageBucket: publicConfig.firebase.storageBucket,
    messagingSenderId: publicConfig.firebase.messagingSenderId,
    appId: publicConfig.firebase.appId,
  }

  const app = getApps()?.[0] ??initializeApp(firebaseConfig)

  // const analytics = getAnalytics(app)
  const auth =  getAuth(app)
  const firestore = getFirestore(app)

  return {
    provide: {
      auth: auth,
      firestore: firestore,
    },
  }
})
