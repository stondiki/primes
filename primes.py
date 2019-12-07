import math
import time

primes = [2]
x = 100000
n = 1

def is_prime(n):
	if n == 1:
		return False

	maxd = math.floor(math.sqrt(n))
	maxd = int(maxd)
	for d in range(2, 2 + maxd):
		if n % d == 0:
			break
		elif n % d != 0 and d == 1 + maxd:
			primes.append(n)
		else:
			continue


t0 = time.time()

while (len(primes)) < x:
	is_prime(n)
	n += 2

t1 = time.time()

p = '\n'.join(map(str, primes))
f = open('pythonPrimes.txt','w')
f.write(p)
f.close()

print ('Calculated ' + str(x) + ' primes in ' + str(t1 - t0) + ' seconds')
