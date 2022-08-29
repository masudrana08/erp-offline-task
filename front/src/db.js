export default function storeToDb(prop) {
   console.log(prop);
   const request = indexedDB.open("MyDb", 1);
     request.onerror = function (event) {
       console.error("An error occurred with IndexedDB");
       console.error(event);
     };
   
     request.onupgradeneeded = function () {
       const db = request.result;
       const store = db.createObjectStore("posts", { keyPath: "id" });
       store.createIndex("post", ["id", "url", "method", "headers", "body"], { unique: false });
     };
   
     request.onsuccess = function () {
       console.log("Database opened successfully");
   
       const mydb = request.result;
       const transaction = mydb.transaction("posts", "readwrite");
       const store = transaction.objectStore("posts");

       store.put({ id: Date.now(), ...prop});
   
      //  const idQuery = store.get(1);
   
       // const postField = store.index("post");
       // const allpostQuery = postField.get(["ami"]);
   
      //  idQuery.onsuccess = function () {
      //    console.log("idQuery", idQuery.result);
      //  };
   
       // allpostQuery.onsuccess = function () {
       //   console.log('allpostQuery', allpostQuery.result);
       // };
   
       // 6
       transaction.oncomplete = function () {
         mydb.close();
       };
     };
}



