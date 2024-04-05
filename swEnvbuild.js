import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config();

fs.writeFileSync('./public/swenv.js',
`
const process = {
  env: {
    FB_API_KEY: '${process.env.NUXT_PUBLIC_FIREBASE_API_KEY}',
    FB_AUTHDOMAIN: '${process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN}',
    FB_PROJECTID: '${process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID}',
    FB_STORAGEBUCKET: '${process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET}',
    FB_MESSAGINGSENDERID: '${process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}',
    FB_APPID: '${process.env.NUXT_PUBLIC_FIREBASE_APP_ID}',
  }
}
`);