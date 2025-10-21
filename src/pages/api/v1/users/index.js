export async function GET() {
    // select * from users

    const user = [
        {name: 'Manolo', edad: 30},
        {name: 'Juan', edad: 32},
        {name: 'Ana', edad: 22},
    ]
    return new Response(
        JSON.stringify(users),
        {
            status: 200
        }
    )
}