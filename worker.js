export default {
    async fetch(request) {
        const url = new URL(request.url);
        const path = url.pathname;
        
        // Proxy to Telegram API
        const tgUrl = `https://api.telegram.org${path}`;
        
        try {
            const response = await fetch(tgUrl, {
                method: request.method,
                headers: request.headers,
                body: request.body
            });
            
            return response;
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
}