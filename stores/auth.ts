import type {
  User,
} from "firebase/auth"

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const logOut = () => {
    user.value= null
  }


  return {
    user,logOut
  }
}, {persist: true})