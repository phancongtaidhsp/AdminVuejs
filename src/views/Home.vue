<template>
  <div class="home">
    <Counter
      :startVal="couter.startVal"
      :endVal="couter.endVal"
      :title="couter.title"
      :img="couter.img"
    />
  </div>
</template>

<script>
import Counter from '../components/Counter'

export default {
  name: 'Home',
  components: {
    Counter
  },
  data() {
    return {
      couter: {
        startVal: 0,
        endVal: 807234,
        title: "Message",
        img: "https://www.flaticon.com/svg/static/icons/svg/2950/2950648.svg",
      },
    };
  },
}
</script>
