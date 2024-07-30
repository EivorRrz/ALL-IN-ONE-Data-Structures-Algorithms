const chunk = (array, size) => {
    let chunks = [];
    let index = 0;
    
    while (index < array.length) {
        const chunk = array.slice(index, index + size);
        chunks.push(chunk);
        index += size;//[1,2,3]then [3,4,5]>>>>>>>
    }
    
    return chunks;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
