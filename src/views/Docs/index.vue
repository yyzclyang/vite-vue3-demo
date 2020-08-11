<template>
  <div class="docs">
    <top-nav />
    <div class="content">
      <aside class="aside">
        <ul>
          <li>
            <router-link to="/docs/setup">setup</router-link>
          </li>
        </ul>
      </aside>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import TopNav from "../../components/TopNav/index.vue";

export default {
  components: { TopNav },
};
</script>

<style lang="scss" scoped>
.docs {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  > .content {
    flex-grow: 1;
    display: flex;
    > .aside {
      flex-shrink: 0;
      width: 120px;
    }
    > .main {
      flex-grow: 1;
    }
  }
}
</style>