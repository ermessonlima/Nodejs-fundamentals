const express = require('express');
const { send } = require('express/lib/response');


const app = express()

app.use(express.json());

//Route Params => Identifica um recurso editar/deletar/buscar
//Query Params => Paginação / Filtro
//Body Params => Os objetos inserção, alterção

app.get('/courses', (request, response) => {
    const query = request.query;
    console.log(query)
    return response.json(
        [
            "Curso 1",
            "Curso 2",
            "Curso 3",
            {query}
        ]
    )
})

app.post("/courses", (request, response) => {
    const params = request.body;
    console.log(params)
    return response.json(
        [
            "Curso 1",
            "Curso 2",
            "Curso 3",
            "Curso 4" 
        ]
    )
})

app.put("/courses/:id", (request, response) => {
    const params = request.params;
    console.log(params)
    return response.json(
        [
            {params},
            "Curso 2",
            "Curso 3",
            "Curso 4" 
        ]
    )
})

app.patch("/courses/:id", (request, response) => {
    return response.json(
        [
            "Curso 6",
            "Curso 7",
            "Curso 3",
            "Curso 4" 
        ]
    )
})

app.delete("/courses/:id", (request, response) => {
    return response.json(
        [
            "Curso 6",
            "Curso 7",
            "Curso 4" 
        ]
    )
})
//localhost: 3333
app.listen(3333)