// DELETE -> http://localhost:4321/api/v1/deleteUser

// - El usuario a borrar (id) va en el body
// - El usuario a borrar (id) va como query param
//      http://localhost:4321/api/v1/deleteUser?id=456
// - El usuario a borrar (id) va como un param
//      http://localhost:4321/api/v1/deleteUser/456

/*
CRUD
DELETE  ->  http://localhost:4321/api/v1/deleteUser/456     (borra un usuario) 
GET     ->  http://localhost:4321/api/v1/allUsers       (ver todos los usuarios)
GET     ->  http://localhost:4321/api/v1/allUsers/456   (ver un user en particular)
POST    ->  http://localhost:4321/api/v1/users       {body}  (crea un usuario nuevo)
PUT     ->  http://localhost:4321/api/v1/users/456   {body}  (modifica un usuario)
PATCH   ->  http://localhost:4321/api/v1/users/456   {body}  (modifica una cosa)
*/

export async function DELETE(params) {
    const id = Number(params.id)
    // delete from users where id = <ID>
    return new Response(
        JSON.stringify({ message: `Usuario ${id} borrado correctamente` }),
        {
            status: 200
        }
    )
}

export async function GET(params) {
    const id = Number(params.id)
    // select * from users where id = <ID>
    const user = {
        name: 'Manolo',
        edad: 30
    }
    return new Response(
        JSON.stringify(user),
        {
            status: 200
        }
    )
}