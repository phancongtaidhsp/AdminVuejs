<template>
<div>
    <h3>Demo Sweet Alert</h3>
    <Alert 
    v-bind:icon="iconAlert.iconError"
    v-bind:title="titleAlert.titleError"
    v-bind:confirmButtonText="confirmButtonTxt.TxtOK"
    class="btn btn-danger"></Alert>
    <Alert 
    v-bind:icon="iconAlert.iconSuccess"
    v-bind:title="titleAlert.titleSuccess" 
    v-bind:confirmButtonText="confirmButtonTxt.TxtOK"
    class="btn btn-success"
    />
    <Alert 
    v-bind:confirmButtonText="confirmButtonTxt.TxtOK"
    class="btn btn-dark"
    v-bind:showCloseButton="showCloseBtn"
    />
    <Alert 
    v-bind:title="titleAlert.titleSaveQuestion"
    class="btn btn-secondary"
    v-bind:showDenyButton="showDenyBtn"
    v-bind:showCancelButton="showCancelBtn"
    v-bind:confirmButtonText="confirmButtonTxt.TxtSave"
    v-bind:denyButtonText="denyButtonTxt.TxtNotSave"
    v-bind:cancelButtonText="cancelButtonTxt.TxtCancel"
    />
    <Alert 
    v-bind:icon="iconAlert.iconWarning"
    title="HTML example"
    html='You can use <b>bold text</b>, <a href="//sweetalert2.github.io">links</a> and other HTML tags'
    class="btn btn-primary"
    v-bind:showCloseButton="showCloseBtn"
    v-bind:showCancelButton="showCancelBtn"
    v-bind:confirmButtonText="confirmButtonTxt.TxtLikeIcon"
    v-bind:cancelButtonText="cancelButtonTxt.TxtNotLikeIcon"
    />

    <h3>Demo Toast Notification</h3>
    <ToastAlert 
      v-bind:type="iconAlert.iconError"
      v-bind:message="titleAlert.titleError"
      v-bind:position="positionNoti.positionTopLeft"
      v-bind:duration="durationToast.twoSecond"
      class="btn btn-danger"
    />
    <ToastAlert 
      v-bind:type="iconAlert.iconSuccess"
      v-bind:message="titleAlert.titleSuccess"
      v-bind:position="positionNoti.positionTopRight"
      v-bind:duration="durationToast.twoSecond"
      class="btn btn-success"
    />
    <ToastAlert 
      v-bind:type="iconAlert.iconInfo"
      v-bind:message="titleAlert.titleInfo"
      v-bind:position="positionNoti.positionBotLeft"
      v-bind:duration="durationToast.twoSecond"
      class="btn btn-info"
    />
    <ToastAlert 
      v-bind:type="iconAlert.iconWarning"
      v-bind:message="titleAlert.titleWarning"
      v-bind:position="positionNoti.positionBotRight"
      v-bind:duration="durationToast.tenSecond"
      v-bind:dismissible="dismissibleToast"
      class="btn btn-warning"
    />
    <DragSelect />
    <DragKanBan />
</div>
    
    
    
</template>

<script>

import Alert from './components/Alert'
import DragSelect from './components/DragSelect'
import '@fortawesome/fontawesome-free/js/all'
import DragKanBan from './components/DragKanBan'
import ToastAlert from './components/ToastAlert'

export default {
  name: 'App',
  components: {
    Alert,
    DragSelect,
    DragKanBan,
    ToastAlert,
  },
  data() {
    return {
      iconAlert: {     
        iconError: "error",
        iconSuccess: "success",
        iconInfo: "info",
        iconWarning: "warning",
        iconQuestion: "question"
      },
      titleAlert: {
        titleError: "Opps...",
        titleSuccess: "Success",
        titleInfo: "Info Title",
        titleWarning: "Warning warning!!!!",
        titleSaveQuestion: "Do you want to save the changes?",
      },
      showDenyBtn: true,
      showCancelBtn: true,
      showCloseBtn: true,
      confirmButtonTxt: {
        TxtOK: "OK",
        TxtSave: "Save",
        TxtLikeIcon: '<i class="fa fa-thumbs-up"></i> Great!',
      },
      cancelButtonTxt: {
        TxtNotLikeIcon: '<i class="fa fa-thumbs-down"></i>',
        TxtCancel: "Cancel"
      },
      denyButtonTxt: {
        TxtNotSave: "Don't save"
      },
      positionNoti: {
        positionTop: "top",
        positionBot: "bottom",
        positionTopLeft: "top-left",
        positionTopRight: "top-right",
        positionBotLeft: "bottom-left",
        positionBotRight: "bottom-right",
      },
      durationToast: {
        twoSecond: 2000,
        threeSecond: 3000,
        fiveSecond: 5000,
        tenSecond: 10000,
      },
      dismissibleToast: true,
    }
  }
}
</script>


<style lang="scss">
  @import './sass/main.scss';
</style>
