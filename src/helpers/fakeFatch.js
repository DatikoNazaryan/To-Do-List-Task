function fakeFetch(key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {  
        const result = localStorage.getItem(key);
  
        if (!result) {
          localStorage.setItem(key, "[]");
          resolve([]);
        }
  
        resolve(JSON.parse(result));
      }, 1000);
    })
  }
  
  export default fakeFetch;
  