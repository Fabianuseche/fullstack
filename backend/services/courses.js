/**
 * courses api
 * aquí estaran las rutas que sean parte de courses
 */

import db from "../db";
import api from "./api";

api.get("/courses", async (req, res) => {
  const courses = await db.from("courses").select("*");
  return courses;
});

api.post("/courses", async (req, res) => {
  await db.insert(req.body).into("courses");
  return req.body;
});

api.get("/courses/:id", async function (req, res) {
  const courses = await db
    .from("courses")
    .where({
      id: req.params.id,
    })
    .first();
  return courses;
});

api.put("/courses/:id", async function (req, res) {
  await db.from("courses").where({ id: req.params.id }).update(req.body);
});

api.delete("/courses/:id", async function (req, res) {
  await db.from("courses").where({ id: req.params.id }).delete();
});
