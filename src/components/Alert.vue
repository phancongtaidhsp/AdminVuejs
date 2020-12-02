<template>
  <button @click="showAlert">Try me</button>
</template>

<script>
export default {

    props: [
        'icon',
        'text',
        'title',
        'footer',
        'showCloseButton',
        'showDenyButton',
        'showCancelButton',
        'confirmButtonText',
        'denyButtonText',
        'cancelButtonText'
    ],


    methods: {
        showAlert() {
        // Use sweetalert2
        this.$swal.fire({
            icon: this.icon,
            title: this.title,
            text: this.text,
            footer: this.footer,
            showCloseButton: this.showCloseButton,
            showDenyButton: this.showDenyButton,
            showCancelButton: this.showCancelButton,
            confirmButtonText: this.confirmButtonText,
            denyButtonText: this.denyButtonText,
            cancelButtonText: this.cancelButtonText
        })
        .then((result) => {
            if (result.isConfirmed && this.confirmButtonText === "Save") {
                this.$swal.fire({
                    title: "Saved!",
                    icon: "success",
                })
            } else if (result.isDenied && this.denyButtonText === "Don't save") {
                this.$swal.fire({
                    title: "Changes are not saved",
                    icon: "info",
                })
            }
        })
        },
    },
};
</script>