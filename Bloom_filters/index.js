const {BloomFilter} = require('./bloom_filter')

const bloom = new BloomFilter(1000,3);

bloom.add("Jappreet");
bloom.add("demo");
bloom.add("test");


console.log(bloom.alreadyExist("Jappreet"));
console.log(bloom.alreadyExist("test"))
console.log(bloom.alreadyExist("Singh"))