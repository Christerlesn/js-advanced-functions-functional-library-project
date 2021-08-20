const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection =  (Array.isArray(collection)) ? collection : Object.values(collection);

      for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
      }
      return collection;
    },

    map: function(collection, callback) {
      const mainCollection = (Array.isArray(collection)) ? collection : Object.values(collection);
      const newArray = []
      for(let i = 0; i < mainCollection.length; i++){
        newArray.push(callback(mainCollection[i]))
      }
      return newArray      
    },

    reduce: function(collection, callback, acc) {
      let c = collection.slice(0)
      if (!acc) {
        acc = collection[0];
        c = collection.slice(1);
      }
      for (let i = 0; i < c.length; i++) {
        acc = callback(acc, c[i], c)
      }
    return acc;
    },

    find: function(collection, predicate){
      const providedCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
      for(let i = 0; i < providedCollection.length; i++){
        if (predicate(providedCollection[i])){
          return providedCollection[i]
        }
      }
      return undefined
    }, 

    filter: function(collection, predicate){
      if (!Array.isArray(collection)) {
        collection = Object.values(collection);
      };
      const filteredCol = []    
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          filteredCol.push(collection[i])
        }
      }
      return filteredCol
    },

    size: function(collection){
      return (Array.isArray(collection)) ? collection.length : Object.values(collection).length

    },

    first: function(array, n){
      return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n){
      return n ? array.slice(-n) : array[array.length - 1]
    },

    compact: function(array){
      return array.filter(ele => Boolean(ele));
    },

    sortBy: function(array, callback){
      const newArr = [...array];
      return newArr.sort(function(a,b){return callback(a) - callback(b)});
    },

    flatten: function(array, shallow, newArr=[]) {
      if (!Array.isArray(array)) { return newArr.push(array) }
      if (shallow) {
        for (let ele of array) {
          if(Array.isArray(ele)) { 
            for (let val of ele) {
              newArr.push(val);
            };
          } else {
            newArr.push(ele);
          }
        }
      } else {
        for (let val of array) {
          console.log(`flattening ${val}`);
          this.flatten(val, false, newArr);
        };
      };
      return newArr;
    },


    uniq: function(array, isSorted=false, callback=false) {
   
      if (!callback) {
        return Array.from(new Set(array))
      } else {
        let transformedObj = new Set(); 
        let uniqValues = new Set();
        for (let ele of array) {
          let newEle = callback(ele);

          if (!transformedObj.has(newEle)) {
            transformedObj.add(callback(newEle));
            uniqValues.add(ele);
          };
        };
        return Array.from(uniqValues);
      };
    },
    keys: function(object){
      const keys = [];
      for (let key in object) {
        keys.push(key);
      };
      return keys;
    },

    values: function(object){
      const values = [];
      for (let key in object) {
        values.push(object[key])
      };
      return values;
    },

    functions: function(object) {
      const functionNames = [];
      for (const key in object) {
        if (typeof object[key] === 'function') {
          functionNames.push(key); 
        };
      };
      return functionNames.sort();
    },
  };
})()

fi.libraryMethod()
