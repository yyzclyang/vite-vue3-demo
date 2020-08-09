<template>
  <div class="setup">
    <h2 class="title">setup demo</h2>
    <div class="content">
      <div class="demo">
        <p>count:{{count}}</p>
        <button @click="add">count +1</button>
      </div>
      <div class="demo">
        <p>user info</p>
        <p>name:{{user.name}}，age:{{user.age}}</p>
        <button @click="changeName">changeName</button>
        <button @click="growUp">grow up</button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const count = ref(0);
    const user = reactive({ name: "yyzcl", age: 18 });

    return {
      count,
      user,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
    changeName() {
      this.user.name += "!";
    },
    growUp() {
      this.user.age += 1;
    },
  },
};
</script>
<style lang="scss" scoped>
.setup {
  p {
    margin: 4px;
  }
  > .title {
    font-weight: bold;
  }
  > .content {
    > .demo {
      margin: 8px;
    }
  }
}
</style>