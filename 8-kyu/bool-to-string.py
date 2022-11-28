# Implement a function which convert the given boolean value into its string representation.

# Note: Only valid inputs will be given.

def boolean_to_string(b):
    if type(b) is bool:
        return str(b)



print(boolean_to_string(True)) # "True"
print(boolean_to_string("Bob")) # 

# Originally just returned str(b) however there is no checks with this version since the param could be anything. My version checks if param is a Boolean and then returns the string accordingly.