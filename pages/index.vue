<script setup>
const authStore = useAuthStore()
const {user} = storeToRefs(authStore)

const startLink = computed(() => !!user.value ? '/welcome': '/login')
</script>

<template lang="pug">
IonPage
  IonHeader()
    IonToolbar
      IonTitle Home Chores
  IonContent(:fullscreen="true")
    IonHeader(collapse="condense")
      IonToolbar
        IonTitle Home Chores 123
    div()
      IonButton(:router-link="startLink" class="ion-padding") Get Started
      IonButton(v-if="user" color="danger" @click="authStore.logOut") Log out
</template>
