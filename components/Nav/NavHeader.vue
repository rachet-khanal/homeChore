<script setup lang="ts">
const authStore = useAuthStore()
const {user} = storeToRefs(authStore)
</script>
<template lang="pug">
IonHeader()
  IonToolbar
    IonTitle Home Chores
    IonButtons(slot="end")
      IonButton(v-if="user" fill="outline" size="small" color="danger" @click="authStore.logOut") 
        span Log out
        IonIcon(slot="end"  :icon="ioniconsHomeOutline")
</template>