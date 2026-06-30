self.addEventListener('install', (event) => {
console.log('Service Worker Installed');
self.skipWaiting();
});

self.addEventListener('activate', (event) => {
console.log('Service Worker Activated');
});

self.addEventListener('fetch', (event) => {
// Abhi ke liye kuch special nahi karna
});
