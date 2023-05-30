function sanatizeData(collection){
    const result = Array.isArray(collection)
if (result){
    return [...collection]
}else {
   return Object.values(collection)
}
}

function myEach(collection, callback) {

    const result = Array.isArray(collection)

    if (result) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i])
        }
    }


    else {
        const getValues = Object.values(collection)
        for (let i = 0; i < getValues.length; i++) {
            callback(getValues[i])
        }
    }

    return collection


}



function myMap(collection, callback){
    const result = Array.isArray(collection)

    if (result){
       const Newarray = collection.map(callback) 
       return Newarray
    }
    else {
        const getValues = Object.values(collection) 
        const Newarray = getValues.map(callback)
        return Newarray
    }

}

function myReduce(collection, callback, acc){
   const newCollection = sanatizeData(collection)
   let i;
   if (acc){
    i = 0
   } else {
    i = 1
    acc = newCollection[0]
   }

   for (i; i< newCollection.length; i++){
    // const callback = (acc, val, collection) => (acc + (val * 3))
    acc = callback(acc, newCollection[i], newCollection)
    
   }
   return acc
}

function myFind(collection, predicate){
    const newCollection = sanatizeData(collection)
    
    for (let i = 0; i< newCollection.length; i++){
      if (predicate(newCollection[i])) {
        return newCollection[i]
      }
    }
}


 function myFilter(collection, predicate){
    const newCollection = sanatizeData(collection)
    const newArray = []
    for (let i = 0; i< newCollection.length; i++){
          if (predicate(newCollection[i])) {
            newArray.push(newCollection[i])
        }
            
      }

      return newArray
 }

 function mySize(collection){
    const newCollection = sanatizeData(collection)
    for (let i = 0; i< newCollection.length; i++)
    return newCollection.length

 }

 function myFirst(array, n = false){
    if (n){
        return array.slice(0, n)
    }
    else {
        return array[0]
    } 
    
 }

 function myLast(array, n = false){
    if (n){
        return array.slice(-n)
    }
    else {
        return array.slice(-1)[0]
    } 
    
 }

 function myKeys(object){
   const newArray = Object.getOwnPropertyNames(object)
   return newArray
 }
 
 function myValues(object){
    const newArray = Object.values(object)
    return newArray
  }