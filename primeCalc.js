const fs = require('fs');

const path = './nodePrimes.json';
let primes, n, x, y = 100000;

try {
    if(fs.existsSync(path)){
        console.log('\nFile exists.');
        primes = JSON.parse(fs.readFileSync(path, 'utf8'));
        if(primes.length == 1){
            n = primes[primes.length - 1] + 1;
            x = primes.length + y;
        } else if(primes.length > 1) {
            n = primes[primes.length - 1] + 2;
            x = primes.length + y;
        } else {
            primes = [2];
            n = 1;
            x = y;
        }
    } else {
        console.log('\nFile not found.');
        primes = [2];
        n = 1;
        x = y;
    }
} catch(err) {
    console.log(err);
}

const isPrime = n => {
    if (n == 1){
        return false;
    } else if (n.toString.length > 1 && n.toString()[n.toString.length - 1] == "5"){
        return false;
    }

    maxd = Math.floor(Math.sqrt(n));

    for (d = 2; d <= maxd + 2; d++){
        if (n % d == 0){
            break;
        }else if (n % d != 0 && d == maxd + 1){
            primes.push(n);
        }
    }
};

let t0 = Date.now();
console.log('Calculating primes...')
while (primes.length < x){
    isPrime(n);
    n += 2;
}

let t1 = Date.now();
let ft = (t1 - t0) / 1000;
let prompt1 = `Calculated ` + y + ` primes in ` + ft + `s.\nTotal primes are now ` + primes.length + `.\n`;
console.log(prompt1);
fs.writeFile(path, JSON.stringify(primes), err => {
    if (err) throw err;
});
