import express from 'express';
import path from 'path'
import cors from 'cors';
import { errors } from 'celebrate'

import routes from './routes'

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333)























// Rota: Endereço completo da requisição
//Recurso: qual entidade estamos acessando do sistema

//GET: buscar uma ou mais informações do back-end 
//POST:Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//Exemplo post: http://localhost:3333/users = Criar um usuário
//Exemplo get: http://localhost:3333/users = Listar usuário

//Request Param: Parametros que vem na própria rota que identifica um recurso
//Query Param: paramtros que vem na própria rota geralmente opcionais para filtros (search)
//Request body: Corpo da requisição, parametros para criação/atualização de informações

//dados dos usuarios = request
//response: resolver uma resposta ao browser


    //devolver um texto simples ao browser "response.send('');"
