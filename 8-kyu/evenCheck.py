# In this Kata we are passing a number (n) into a function.

# Your code will determine if the number passed is even (or not).

# The function needs to return either a true or false.

# Numbers may be positive or negative, integers or floats.

# Floats with decimal part non equal to zero are considered UNeven for this kata.

def is_even(n): 
    if n % 2 == 0:
        return True
    else:
        return False



print(is_even(7))
print(is_even(8))
print(is_even(10))
print(is_even(17))

# Best Practice

# def is_even(n): 
#     return n%2 == 0