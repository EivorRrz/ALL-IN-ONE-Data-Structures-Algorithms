class HashMap {
    constructor(size = 101) {
      this.size = size; // Prime number for better distribution
      this.index = new Array(size);
    }
  
    // Hash function to generate a hash code from a key
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        const char = key.charCodeAt(i);
        hash = (hash * 31 + char) % this.size; // Using a prime number (31) for better distribution
      }
      return hash;
    }
  
    // Set a key-value pair in the hash map
    set(key, value) {
      const hash = this._hash(key);
      const bucket = this.index[hash];
      
      // Check if key already exists and update its value if so
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
      
      // If key does not exist, add a new entry
      bucket.push([key, value]);
    }
  
    // Get the value associated with a key
    get(key) {
      const hash = this._hash(key);
      const bucket = this.index[hash];
      
      // Search for the key in the corresponding bucket
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
      
      return undefined; // Key not found
    }
  
    // Get all key-value pairs as an array of objects
    getAll() {
      const allEntries = [];
      
      for (const bucket of this.index) {
        for (const [key, value] of bucket) {
          allEntries.push({ key, value });
        }
      }
      
      return allEntries;
    }
  }
  
  // Example usage:
  const hashMap = new HashMap();
  
  hashMap.set('name', 'John Doe');
  hashMap.set('age', 30);
  hashMap.set('city', 'New York');
  
  console.log(hashMap.get('name')); // Output: John Doe
  console.log(hashMap.get('age'));  // Output: 30
  console.log(hashMap.get('city')); // Output: New York
  
  console.log(hashMap.getAll()); 
  // Output: [
  //   { key: 'name', value: 'John Doe' },
  //   { key: 'age', value: 30 },
  //   { key: 'city', value: 'New York' }
  // ]
  