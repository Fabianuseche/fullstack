import api from "./api";

api.get("/students", async (req, res) => {
  return { hello: "students" };
});
