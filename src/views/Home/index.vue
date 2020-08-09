<template>
  <div class="home">
    <TopNav />
    <h1 class="welcome-tip">welcome to vue3</h1>
    <router-link class="link" to="/docs">doc</router-link>
  </div>
</template>

<script>
import TopNav from "../../components/TopNav/index.vue";
export default {
  components: { TopNav },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  > .welcome-tip {
    font-size: 24px;
  }
  > .link {
    text-decoration: none;
    color: inherit;
    height: 24px;
    line-height: 20px;
    padding: 2px 8px;
    border: 1px solid #666;
    border-radius: 12px;
  }
}
</style>