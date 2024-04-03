<script setup lang="ts">
import {Device} from '@capacitor/device'

const deviceInfo = ref({})

onMounted(async () => deviceInfo.value = await Device.getInfo())

</script>

<template lang="pug">
IonPage
  NavHeader
  IonContent
    div(class="container px-3")
      h2(class="mt-6 mb-3") Welcome to Home Chore 
      p(class="mb-3") Get ready to put your cleaning gloves on!!!
      IonButton(router-link="/" shape="round" size="small" color="danger" class="mb-3") 
        span(class="px-2 py-3") Back To Start
        IonIcon(slot="start" :icon="ioniconsHome")
      IonCard
        IonCardHeader 
          IonCardTitle() Device Info
        IonCardContent
          pre {{  deviceInfo  }}
</template>