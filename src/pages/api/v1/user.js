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
PUT     ->  http://localhost:4321/api/v1/
*/

export async function DELETE() {

}