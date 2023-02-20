import api from "./api";

api.get("/teachers", async (req, res) => {
  return { hello: "teachers" };
});
