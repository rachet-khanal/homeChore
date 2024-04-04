<script setup lang="ts">

</script>

<template lang="pug">
IonPage
  NavHeader
  IonContent
    div(class="container px-3")
      h2(class="mt-6 mb-3") Task Lists 
      p(class="mb-3") Remember good hygiene equals good health.
      IonList(:inset="true")
        IonItem 
          IonIcon(:icon="ioniconsBookOutline" slot="start")
          IonCheckbox() Nuxt Ionic Documents
          a(slot="end" target="_blank" rel="noopener noreferrer" href="https://ionic.nuxtjs.org" class="text-2xl") 
            IonIcon(:icon="ioniconsOpenOutline")

        IonItem 
          IonIcon(:icon="ioniconsRocketOutline" slot="start")
          IonLabel
          IonCheckbox() Nuxt Ionic Playground
          a(slot="end" target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/github/nuxt-modules/ionic/tree/main/playground" class="text-2xl") 
            IonIcon(:icon="ioniconsOpenOutline")  

        IonItem 
          IonIcon(:icon="ioniconsLogoGithub" slot="start")
          IonCheckbox() Nuxt Ionic GitHub Repo      
          a(slot="end" target="_blank" rel="noopener noreferrer" href="https://github.com/nuxt-modules/ionic" class="text-2xl")
            IonIcon(:icon="ioniconsOpenOutline")  
        IonItem 
          IonIcon(:icon="ioniconsVideocamOutline" slot="start")
          IonCheckbox() Video: Getting Started with Nuxt Ionic Module      
          a(slot="end" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=f4sB7NhCgRw" class="text-2xl")
            IonIcon(:icon="ioniconsOpenOutline")  

</template>