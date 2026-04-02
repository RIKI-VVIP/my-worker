export default {
    async fetch(request) {
        const url = new URL(request.url);
        const apiUrl = `https://api.susstresser.com${url.pathname}${url.search}`;
        
        const response = await fetch(apiUrl, {
            method: request.method,
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json'
            },
            body: request.body
        });
        
        return response;
    }
}