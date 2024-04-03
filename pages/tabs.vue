<template lang="pug">
IonPage
  IonContent 
  IonTabs 
    IonRouterOutlet 
    IonTabBar(slot="bottom")
      IonTabButton(tab="welcome" href="/tabs/welcome")
        IonIcon(:icon="ioniconsHome")
        IonLabel Main
      
      IonTabButton(tab="task" href="/tabs/task")
        IonIcon(:icon="ioniconsList")
        IonLabel Tasks
      
      IonTabButton(tab="menu" href="/tabs/menu")
        IonIcon(:icon="ioniconsMenu")
        IonLabel Menu
</template>