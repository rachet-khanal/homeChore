<script setup lang="ts">
import { Toast } from '@capacitor/toast';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';

const showHelloToast = async () => {
  await Toast.show({
    text: 'Hello World!',
  });
};

const showActions = async () => {
  const result = await ActionSheet.showActions({
    title: 'Photo Options',
    message: 'Select an option to perform',
    options: [
      {
        title: 'Upload',
      },
      {
        title: 'Share',
      },
      {
        title: 'Remove',
        style: ActionSheetButtonStyle.Destructive,
      },
    ],
  });

  console.log('Action Sheet result:', result);
};

const actionSheetButtons = [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ];
</script>

<template lang="pug">
IonPage
  NavHeader(:hasBackBtn="true")
  IonContent(:fullscreen="true")
    div(class="container px-3")
      h2(class="mt-6 mb-3") Dialog
      IonButton(@click="showHelloToast") Show Cap Toast
      IonButton(id="open-toast") Show Ionic Toast
      IonToast(trigger="open-toast" message="Hello World!")

      IonButton(@click="showActions") Show Cap Actions

      IonButton( id="open-action-sheet") Open Ionic Toast
      IonActionSheet(trigger="open-action-sheet" header="Actions" :buttons="actionSheetButtons")
      
          
</template>