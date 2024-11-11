const crypto = require('crypto')

class BloomFilter {
    constructor(size, hashcount) {
        this.bitArray = new Array(size).fill(0);
        this.hashCount = hashcount;
        this.size = size;
    }
    hash(value, seed) {
        const hash = crypto.createHash("md5");
        hash.update(value + seed.toString());
        return parseInt(hash.digest('hex',16))%this.size;
    }

    add(value) {
        for (let i = 0; i < this.hashCount; i++) {
            const index = this.hash(value, i);
            this.bitArray[index] = 1;
        }
    }

    alreadyExist(value) {
        for (let i = 0; i < this.hashCount; i++) {
            const index = this.hash(value, i);
            if (this.bitArray[index] === 0) {
                return false;
            }
        }
        return true;
    }
}

module.exports = {BloomFilter}