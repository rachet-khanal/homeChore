<template lang="pug">
IonPage
  IonHeader(:translucent="true")
    IonToolbar
      IonTitle Home Chore

  IonContent
    div()
      h2 Welcome to Home Chore 
      span Get ready to put your cleaning gloves on!!!
    IonButton(router-link="/") Back To Start

</template>