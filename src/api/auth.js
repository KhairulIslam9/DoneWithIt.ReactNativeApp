import client from "./client";

const login = (email, password) => {
  console.log("lfe");
  return client.post("/auth", { email, password });
};

export default {
  login,
};
