import api from "./api";

async function signIn(mail: string, password: string) {
  try {
    const { data } = await api.post("/user/login", { mail, password });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function userCreate(mail: string, password: string) {
  try {
    const { data } = await api.post("/user/create", { mail, password });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

export { signIn, userCreate };
