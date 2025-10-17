export async function GET() {
    
    const msg = {
        hora: new Date().toLocaleTimeString(), // 09:03:00 16/10/2025
        text: 'La hora actual es:'   
    }

    return new Response(
        JSON.stringify(msg),
        {
            headers: { 'Content-Type':'application/json' },
            status: 200
        }
    )
}