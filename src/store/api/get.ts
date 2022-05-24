import { getCurrentInstance } from "vue";

export default (data: string) => {
  // @ts-ignore
  const Api = getCurrentInstance().appContext.config.globalProperties.Api;
  return Api.Get(data);
};
