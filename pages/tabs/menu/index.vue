<script setup lang="ts">

</script>

<template lang="pug">
IonPage
  NavHeader
  IonContent
    div(class="container px-3")
      h2(class="mt-6 mb-3") Menu
      IonList()
        IonItem 
          IonButton(fill="clear" expand="full" color="dark" router-link="/tabs/menu/dialog") Dialog Boxes
            IonIcon(:icon="ioniconsBookOutline" slot="start")
          
</template>