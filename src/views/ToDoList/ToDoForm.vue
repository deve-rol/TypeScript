<template>
  <div class="to-do-form">
    <div class="content">
      <form @submit.prevent="submit">
        <div class="p-relative">
          <input
            v-model="form.name"
            type="text"
            autofocus
            class="form-input"
            placeholder="Введите наименование"
          />
          <span v-show="nameError" class="form-error-text">{{
            requireText
          }}</span>
        </div>

        <div class="p-relative">
          <textarea
            v-model="form.description"
            class="form-input"
            placeholder="Введите описание"
          ></textarea>
          <span v-show="descriptionError" class="form-error-text">{{
            requireText
          }}</span>
        </div>

        <div class="p-relative">
          <textarea
            v-model="form.note"
            class="form-input"
            placeholder="Заметка"
          ></textarea>
        </div>

        <div class="btn-group">
          <button type="submit" class="primary-btn">
            <span v-if="!isEdit">Добавить</span>
            <span v-else>Сохранить</span>
          </button>

          <button type="reset" @click="cancel" class="grey-btn">
            Отменить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ToDoItem from "@/types/ToDoList/ToDoItem";

export default defineComponent({
  name: "ToDoForm",
  data() {
    return {
      form: {
        name: "",
        description: "",
        note: "",
      } as ToDoItem,
      requireText: "Это поле обязательно к заполнению",
      startValidation: false,
    };
  },
  computed: {
    isEdit(): boolean {
      return !!this.$route.params.id;
    },
    nameError(): boolean {
      return this.startValidation && !this.form.name.trim();
    },
    descriptionError(): boolean {
      return this.startValidation && !this.form.description.trim();
    },
  },
  methods: {
    setForm(): void {
      const item: ToDoItem | undefined = this.$store.getters[
        "toDoList/getItemById"
      ](+this.$route.params.id);

      if (!item) {
        this.$router.push("/Add");
        return;
      }

      this.form = { ...item };
    },
    validate(): boolean {
      let res = true;
      this.startValidation = true;

      if (!this.form.name.trim() || !this.form.description.trim()) {
        res = false;
      }
      return res;
    },
    submit(): void {
      if (!this.validate()) return;

      const actionType = this.isEdit ? "A_EDIT_ITEM" : "A_ADD_ITEM";
      this.$store
        .dispatch(`toDoList/${actionType}`, this.form)
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          alert("Ошибка");
        });
    },
    cancel(): void {
      this.$router.push("/");
    },
    resetForm(): void {
      this.startValidation = false;
      this.form = {
        name: "",
        description: "",
        note: "",
      };
    },
  },
  beforeRouteLeave(to, from, next): void {
    this.resetForm();
    next();
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler(val: string): void {
        if (val) {
          this.setForm();
        }
      },
    },
  },
});
</script>

<style scoped lang="scss">
.to-do-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

  .content {
    width: 50%;
    min-width: 500px;

    form {
      display: grid;
      grid-gap: 20px;

      textarea {
        resize: vertical;
      }

      .btn-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
      }
    }
  }
}
</style>
