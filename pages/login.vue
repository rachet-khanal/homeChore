<script setup lang="ts">
import {RecaptchaVerifier} from 'firebase/auth'
import type  {ApplicationVerifier, ConfirmationResult} from 'firebase/auth'

const { sendOTP, verifyOTP } = useFirebaseAuth()
const authSore = useAuthStore()
const {user} = storeToRefs(authSore)
const { $auth } = useNuxtApp()
const router = useIonRouter()
 
const recaptcha = ref<ApplicationVerifier | undefined>()
const confirmation = ref<ConfirmationResult | undefined>(undefined)
const otp = ref('')
const phoneNumber = ref('+61450682300')

const submitLogin = async () => {
  if(!recaptcha.value){
    return console.error('Recaptcha Verification Failed')
  }
  confirmation.value = await sendOTP(phoneNumber.value, recaptcha.value)
}
const confirmLogin = async () => {
  if(!confirmation.value){
    return console.error('Confirmation Failed')
  }
  await verifyOTP(confirmation.value, otp.value)
}

onMounted(() => {
  recaptcha.value = new RecaptchaVerifier($auth, 'recaptcha-container', {
    size: 'invisible'
  })
})

watchEffect(() =>{
  if(user.value){
    router.push('/welcome')
  }
})

</script>

<template lang="pug">
IonPage
  IonHeader(:translucent="true")
    IonToolbar
      IonTitle Home Chore - Login
  IonContent(:fullscreen="true")
    form
    div(v-if="!recaptcha") 
      span Verifying User Account
    
    div(v-else)
      div(v-if="!confirmation")
        IonInput(v-model="phoneNumber" name="phoneNumber" label-placement="floating" label="Phone Number" placeholder="Enter your phone number")
        IonButton(@click="submitLogin") Log in
      div(v-else)
        IonInput(v-model="otp" name="otp" label="OTP Code" label-placement="floating" placeholder="Enter OTP provided")
        IonButton(@click="confirmLogin" id="recaptcha-container") Submit

    div(id="recaptcha-container")
    IonButton(color="danger" router-link="/" router-direction="back" ) Back
</template>
