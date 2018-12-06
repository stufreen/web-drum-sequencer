const DB_NAME = 'wds-1';
const DB_VERSION = 1;
const USER_SAMPLES = 'USER_SAMPLES';

let db;

export const initializeDB = () => new Promise((resolve, reject) => {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  request.onerror = (event) => {
    reject(event);
  };

  request.onupgradeneeded = (event) => {
    // Create an objectStore for this database
    db = event.target.result;
    db.createObjectStore(USER_SAMPLES);
  };

  request.onsuccess = (event) => {
    db = event.target.result;
    resolve();
  };
});

export const saveToDb = (myArrayBuffer, myKey) => new Promise((resolve, reject) => {
  const trans = db.transaction([USER_SAMPLES], 'readwrite');
  trans.objectStore(USER_SAMPLES).put(myArrayBuffer, myKey);
  trans.onerror = (event) => {
    reject(event);
  };
  trans.onsuccess = () => {
    resolve(myKey);
  };
});
