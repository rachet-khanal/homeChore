<script setup lang="ts">

</script>

<template lang="pug">
IonPage
  NavHeader
  IonContent
    div(class="container px-3")
      h2(class="mt-6 mb-3") Task Form 
      p(class="mb-3") Remember good hygiene equals good health.
      IonButton(router-link="/task" shape="round" size="small" color="danger" class="mb-3") 
        span(class="px-2 py-3") Cancel
        IonIcon(slot="start"  :icon="ioniconsClose")
</template>