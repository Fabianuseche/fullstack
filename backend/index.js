import api from "./services/api";

import "./services/courses";
import "./services/students";
import "./services/teachers";

const start = async () => {
  try {
    await api.listen({ port: 3000 });
  } catch (err) {
    api.log.error(err);
    process.exit(1);
  }
};

start();
