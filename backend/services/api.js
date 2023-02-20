import Fastify from "fastify";
import cors from '@fastify/cors'

const api = Fastify();

// registrar middlewares
api.register(cors)

export default api;
