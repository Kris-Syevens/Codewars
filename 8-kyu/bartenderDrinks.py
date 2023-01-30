# Complete the function that receives as input a string, and produces outputs according to the following table:

# Input	Output
# "Jabroni"	"Patron Tequila"
# "School Counselor"	"Anything with Alcohol"
# "Programmer"	"Hipster Craft Beer"
# "Bike Gang Member"	"Moonshine"
# "Politician"	"Your tax dollars"
# "Rapper"	"Cristal"
# anything else "Beer"
# Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

# Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

# STRINGSFUNDAMENTALS

def get_drink_by_profession(param):
    lowerParam = param.lower()
    if lowerParam == "jabroni":
        return "Patron Tequila"
    elif lowerParam == "school counselor":
        return "Anything with Alcohol"
    elif lowerParam == "programmer":
        return "Hipster Craft Beer"
    elif lowerParam == "bike gang member":
        return "Moonshine"
    elif lowerParam == "politician":
        return "Your tax dollars"
    elif lowerParam == "rapper":
        return "Cristal"
    else:
        return "Beer"


print(get_drink_by_profession("jabrOni"))  # "Patron Tequila"
