<template>
  <div class="counter">
    <div class="counter__right">
      <img
        :src="img"
        alt="icon"
      />
    </div>
    <div class="counter__left">
      <p>{{ title }}</p>
      <countTo
        class="counter__leftnumber"
        :startVal="startVal"
        :endVal="endVal"
        :duration="duration"
        :autoplay="autoplay"
        :decimals="decimals"
        :decimal="decimal"
        :prefix="prefix"
        :suffix="suffix"
      ></countTo>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";

export default {
  components: { countTo },
  props: {
    title: String,
    img: String,
    startVal: {
      type: Number,
      required: true,
      default: function () {
        return { startVal: 0 };
      },
    },
    endVal: {
      type: Number,
      required: true,
      default: function () {
        return { endVal: 100 };
      },
    },
  },
  data() {
    return {
      duration: 4000, //duration in millisecond
      autoplay: true,
      decimals: 0, //the number of decimal places to show
      decimal: ".",
      prefix: "",
      suffix: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;

  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;

  .counter__right {
    transition: all 0.38s ease-out;
    border-radius: 6px;
    padding: 16px;
    cursor: pointer;
    border-radius: 6px;

    img {
      filter: invert(52%) sepia(45%) saturate(1849%) hue-rotate(182deg)
        brightness(100%) contrast(94%);
      height: 50px;
      width: 50px;
    }
  }

  .counter__left {
    cursor: pointer;
    p {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
      font-weight: 700;
    }

    .counter__leftnumber {
      font-size: 20px;
      font-weight: 700;
      color: #666;
      line-height: 1.15;
    }
  }
}

.counter:hover {
  .counter__right {
    background-color: #36a3f7;

    img {
      filter: invert(99%) sepia(100%) saturate(0%) hue-rotate(346deg)
        brightness(102%) contrast(101%);
    }
  }
}
</style>