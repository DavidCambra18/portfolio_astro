export async function POST({ request }) {
    const body = await request.json()
    const { name, text } = body

    if (!name || !text) {
        return new Response(
            JSON.stringify({
                error: 'Faltan campos obligatorios'
            }),
            {
                headers: { 'Content-Type': 'application/json' },
                status: 400
            }
        )
    }

    // Guardar en una BD el name y text

    return new Response(
        JSON.stringify({
            message: 'Información guardada correctamente'
        }),
        {
            headers: { 'Content-Type': 'application/json' },
            status: 201
        }
    )
}