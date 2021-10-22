self.addEventListener('install', event => {
    console.log('service worker is installed', event);
});

self.addEventListener('fetch', event => {
    if (event.request.url.match(/todos/)) {
        console.log('request.matched', event.request);
        if (event.request.method === 'GET') {
            const messages = JSON.stringify([
                'Merhaba', 'Marhaba', 'Namaskar', 'Hoi', 'Hello', 'Hola', 'Bonjour'
            ]);

            event.respondWith(new Response(messages));
        } else if (event.request.method === 'POST' || event.request.method === 'PUT') {
            event.respondWith(
                event.request.json()
                    .then(() => new Response({ message: 'success' }))
                    .catch(() => new Response({ message: 'invalid_request' }, { status: 400 }))
            );
        }
    }
});
