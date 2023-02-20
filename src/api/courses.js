const api = "http://localhost:3000/courses";

// devolver courses
export const get_courses = async () => {
  // hace un llamado http usando la funcion fetch a la url que le pasamos
  // fetch es async, entoces ponemos await antes del llamado para esperar
  // y tener la respuesta
  const resp = await fetch(api);

  // para obtener el body de la respuesta en format json (que podamos usar en js)
  // usamos la funcion .json() que esta dentro de la respuesta
  const courses = await resp.json();

  // devolver courses
  return courses;
};

export const crear_course = async (course) => {
  await fetch(api, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });
};
