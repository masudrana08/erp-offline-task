const staticCache = "static-v1";
const preFetch = [
  '/',
  '/static/js/bundle.js',
  '/css/companion-bubble.css',
  '/css/content.css',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/show-products',
  '/show-sells',
  '/signin',
  '/signup',
  '/create-product',
];
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      cache.addAll(preFetch);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    if (event.request.method == "GET") {
      event.respondWith(
        caches.match(event.request).then((resCache) => {
          return resCache;
        })
        );
        // let requestClone = event.request.clone()
        // fetch(requestClone)
    }
  }
});



// setInterval(()=>{
//     if(navigator.onLine){
//         const request = indexedDB.open("MyDb", 1);
//      request.onerror = function (event) {
//        console.error("An error occurred with IndexedDB");
//        console.error(event);
//      };

//      request.onsuccess= function(){
//         const db = request.result
//         const transaction = db.transaction('posts', 'readwrite')
//         const store = transaction.objectStore('posts')

//         const allPost = store.getAll()
//         allPost.onsuccess = function(){
//             const posts = allPost.result
//             for(let post of posts){
//                 store.delete(post.id)
//                 fetch(post.url, {
//                     method: post.method,
//                     headers: post.headers,
//                     body: post.body
//                 })
                
//             }
//         }
//      }
//     }
// }, 10000)