import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes";
import { httpMethod } from "./Utils/http-methods";
import { app } from "./app";

const server = http.createServer(app);

const port = process.env.PORT

server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})