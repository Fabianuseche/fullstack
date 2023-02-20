import React, { useRef } from "react";
import { crear_course } from "../../api/courses";

const CreateCourse = () => {
  const $name = useRef();   // conecta la variable con un elemento html
  const $schedule = useRef();
  const $note = useRef();

  const handleCreate = () => {
    const course = {
      name: $name.current.value,
      schedule: $schedule.current.value,
      note: +$note.current.value,
    };
    crear_course(course);
  };

  return (
    <div>
      <input type="text" name="name" ref={$name} />
      <input type="text" name="schedule" ref={$schedule} />
      <input type="number" name="note" ref={$note} />
      <button onClick={handleCreate}>Crear Materia</button>
    </div>
  );
};

export default CreateCourse;
