# Count the number of divisors of a positive integer n.

# Random tests go up to n = 500000.

# Examples (input --> output)
# 4 --> 3 (1, 2, 4)
# 5 --> 2 (1, 5)
# 12 --> 6 (1, 2, 3, 4, 6, 12)
# 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

# Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

def divisors(n):
    count = 0

    if n == 1:
        return 1

    for x in range(1, n):
        if n % x == 0:
            if n/(n/x) == x:
                count = count + 1
        elif n % x != 0:
            if n-(n/x)/(n/x) == x:
                count = count + 1

    return count




print(divisors(4)) #3
print(divisors(5)) #2
print(divisors(12)) #6
print(divisors(1)) #1

# Best Practice

# def divisors(n):
#     return  len([l_div for l_div in range(1, n + 1) if n % l_div == 0]);