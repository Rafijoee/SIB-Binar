const strArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

function foreach (array, callback){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i], i));
    }
    return newArray;
}

const lenArray = foreach(strArray, (item) => {
    return item.length;
});
console.log(lenArray); // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]