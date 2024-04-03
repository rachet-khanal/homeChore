<script setup>
const authStore = useAuthStore()
const {user} = storeToRefs(authStore)

const startLink = computed(() => user.value ? '/welcome': '/login')
</script>

<template lang="pug">
IonPage
  NavHeader
  IonContent(:fullscreen="true")
    div(class="container px-3")
      //- IonHeader(collapse="condense")
        //- IonToolbar
          //- IonTitle Home Chores
      div()
        h3(class="mt-6 mb-3") Get Started with your home chore notifications and alerts.
        p(class="mb-3") Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Maecenas malesuada.
        p(class="mb-3") Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Sed lectus.
      div()
        IonButton(:router-link="startLink" class="ion-padding" shape="round") Get Started
</template>
