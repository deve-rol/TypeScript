import AuthState from "@/types/Store/AuthState";

export default <AuthState>{
  isAuth: localStorage.getItem("IsAuth") === "on",
};
