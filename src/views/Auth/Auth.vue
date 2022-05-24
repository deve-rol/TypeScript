<template>
  <div class="auth">
    <form @submit.prevent="login">
      <span v-show="authErrorText" class="exist-error-text">{{
        authErrorText
      }}</span>

      <div class="p-relative">
        <input
          v-model="form.login.value"
          type="text"
          autofocus
          class="form-input"
          placeholder="Введите логин"
        />
        <span class="form-error-text">{{ form.login.error }}</span>
      </div>

      <div class="p-relative">
        <input
          v-model="form.password.value"
          type="password"
          class="form-input"
          placeholder="Введите пароль"
        />
        <span class="form-error-text">{{ form.password.error }}</span>
      </div>

      <button type="submit" class="primary-btn">Войти</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Auth",
  data() {
    return {
      form: {
        login: {
          value: "",
          error: "",
        },
        password: {
          value: "",
          error: "",
        },
      },
      authErrorText: "",
    };
  },
  methods: {
    login(): void {
      if (!this.validate()) return;
      this.$store
        .dispatch("auth/A_AUTH", {
          login: this.form.login.value,
          password: this.form.password.value,
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          this.authErrorText = "Логин или пароль указаны неверно.";
        });
    },
    validate(): boolean {
      const msg = "Это поле обязательно к заполнению";

      const loginValid = !!this.form.login.value;
      this.form.login.error = loginValid ? "" : msg;

      const passwordValid = !!this.form.password.value;
      this.form.password.error = passwordValid ? "" : msg;

      return loginValid && passwordValid;
    },
    resetForm(): void {
      this.form = {
        login: {
          value: "",
          error: "",
        },
        password: {
          value: "",
          error: "",
        },
      };
      this.authErrorText = "";
    },
  },
  beforeRouteLeave(to, from, next): void {
    this.resetForm();
    next();
  },
});
</script>

<style scoped lang="scss">
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

  form {
    display: grid;
    grid-gap: 20px;
    width: 300px;

    .exist-error-text {
      color: red;
      font-size: 14px;
    }
  }
}
</style>
