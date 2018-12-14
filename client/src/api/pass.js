import api from "./api";

export async function validateTicket(body) {
  const { data } = await api.post("/validate", body);
  return processUser(data);
}
