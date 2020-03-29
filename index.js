const set = (arr) => {
    const uniqeElements = [];
    for(let i = 0; i < arr.length; i++) {
        if(!uniqeElements.includes(arr[i])) {
            uniqeElements.push(arr[i]);
        }
    }
    return uniqeElements;
}

module.exports = set;