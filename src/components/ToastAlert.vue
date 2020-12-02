<template>
  <button @click="showToastAlert">Try me</button>
</template>

<script>
export default {
    props: [
        'type',
        'message',
        'position',
        'duration',
        'dismissible',
    ],
    methods: {
        showToastAlert() {
            this.$toast.open({
                type: this.type,
                message: this.message,
                position: this.position,
                duration: this.duration,
                dismissible: this.dismissible,
            });
        }
    }
}
</script>

<style>

</style>