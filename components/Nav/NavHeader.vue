<script setup lang="ts">
const authStore = useAuthStore()
const {user} = storeToRefs(authStore)
</script>
<template lang="pug">
IonHeader()
  IonToolbar
    IonTitle Home Chores
    IonButtons(slot="end")
      IonButton(
        v-if="user" 
        @click="authStore.logOut"
        color="danger"
        shape="round"
        class="text-xs"
      ) 
        p(class="py-1") Log out
        IonIcon(slot="end" :icon="ioniconsLogOutOutline" )
</template>