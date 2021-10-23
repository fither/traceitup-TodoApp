self.addEventListener('install', event => {
  console.log('service worker is installed', event);
});

self.addEventListener('fetch', event => {
  if (event.request.url.match('/todos')) {
    console.log('request.matched', event.request);
    const method = event.request.method;
    if (method === 'GET') {
      const messages = JSON.stringify([
        {
          id: 1,
          name: 'Merhaba',
          state: 'Pending'
        },
        {
          id: 2,
          name: 'Marhaba',
          state: 'Pending'
        },
        {
          id: 3,
          name: 'Namaskar',
          state: 'Pending'
        },
        {
          id: 4,
          name: 'Hoi',
          state: 'Pending'
        },
        {
          id: 5,
          name: 'Hello',
          state: 'Pending'
        },
        {
          id: 6,
          name: 'Hola',
          state: 'Pending'
        },
        {
          id: 7,
          name: 'Bonjour',
          state: 'Pending'
        }
      ]);

      event.respondWith(new Response(messages));
    } else if (method === 'POST' || method === 'PUT') {
      event.respondWith(
        event.request.json()
          .then(() => new Response({ message: 'success' }))
          .catch(() => new Response({ message: 'invalid_request' }, { status: 400 }))
      );
    } else if(method === 'DELETE') {
      event.respondWith(new Response(JSON.stringify([{success: true}])));
    }
  }
});
