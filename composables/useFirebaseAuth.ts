import type {
  ApplicationVerifier,
  ConfirmationResult,
} from "firebase/auth"

import { signInWithPhoneNumber } from "firebase/auth"

export default function () {
  const { $auth } = useNuxtApp()
  const {user} = storeToRefs(useAuthStore())


  const sendOTP = async (
    phoneNumber: string,
    appVerifier: ApplicationVerifier
  ): Promise<ConfirmationResult> => {
    return signInWithPhoneNumber($auth, phoneNumber, appVerifier)
  }

  const verifyOTP = async (
    confirmOtp: ConfirmationResult,
    verifyOTP: string
  ) => {
    const userCredit = await confirmOtp.confirm(verifyOTP)
    console.log(userCredit)
    if(userCredit){
      user.value = await userCredit.user
    }
  }


  return {
    user,
    sendOTP,
    verifyOTP,
  }
}
