<template>
<div :style="{border: '1px solid #3fb27f'}">
    <h2>{{ message }}</h2>
    <div class="input-counter">
    <input class="minus" type="button" v-on:click="handleDecrement" value="-" />
    <input class="counter" type="text" disabled :value="count"/>
    <input class="plus" type="button" v-on:click="handleIncrement" value="+" />
    </div>
    <br/>
</div>
</template>
<style scoped>
  h2 {
  color: #3fb27f;
  }
    .input-counter .counter {
    border:1px solid #ddd;
    border-radius:4px;
    width: 44px;
    height: 40px;
    outline: none;
    font-size: 12px;
    text-align: center;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 14px;
    margin: 0 10px;
    }
		.minus, .plus{
			    margin: 0;
    outline: none;
    border:1px solid #ddd;
    width: 44px;
    height: 40px;
    cursor: pointer;
    background:#f2f2f2;
		border-radius:4px;
    font-weight: 400;
    font-size: 22px;
    line-height: 18px;
		}
</style>

<script>
export default {
 props: ["counter", "update"],
  data() {
    return { message: "From Vue!", count: window.myapp.counter };
  },
  mounted() {
    window.addEventListener('onIncrement', () => {
      this.count = window.myapp.counter;
    });
    window.addEventListener('onDecrement', () => {
      this.count = window.myapp.counter;
    });
  },
  methods: {
    handleIncrement : () => {
      window.myapp.incrementor();
    },
    handleDecrement : () => {
      window.myapp.decrementor();
    },
  },
};
</script>