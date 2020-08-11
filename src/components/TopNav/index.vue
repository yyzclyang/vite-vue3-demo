<template >
  <div class="top-nav">
    <img class="logo" src="../../assets/logo.png" alt="logo" />
    <div class="user-info" v-if="isLogin">
      <span class="info">age: {{userInfo.age}}</span>
      <span class="info">star: {{userInfo.star}}</span>
      <span class="info">user: {{userInfo.name}}</span>
      <button @click="logout">logout</button>
    </div>
    <div class="user-info" v-else>
      <button @click="login">login</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import {
  LOGIN,
  LOGOUT,
  CHANGE_NAME,
  GROW_UP,
} from "../../store/actions/action-types";

export default {
  setup() {
    const store = useStore();

    const isLogin = computed(() => store.getters.login);
    const userInfo = computed(() => store.getters.userInfo);

    const login = () => {
      store.dispatch({ type: LOGIN });
    };
    const logout = () => {
      store.dispatch({ type: LOGOUT });
    };

    return { isLogin, login, logout, userInfo };
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  font-size: 16px;
  height: 30px;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .logo {
    height: 24px;
    width: 24px;
  }
  > .user-info {
    > .info {
      margin: 0 4px;
    }
  }
}
</style>