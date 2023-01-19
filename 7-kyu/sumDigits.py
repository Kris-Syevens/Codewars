
# Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

# For example: (Input - -> Output)

# 10 - -> 1
# 99 - -> 18
# -32 - -> 5

# Let's assume that all numbers in the input will be integer values.


def sum_digits(number):
    num_string = str(number)
    sum = 0
    if (number >= 0):
        for x in num_string:
            sum += int(x)
    else:
        for x in num_string[1:]:
            sum += int(x)

    return sum


print(sum_digits(10))  # 1
print(sum_digits(99))  # 18
print(sum_digits(-32))  # 5
