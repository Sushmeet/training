# general functions 
def add_numbers (a, b):
    return a + b

print(f"the sum of 2 numbers 4, 5 is {add_numbers(4,5)}")


#Positional Arguments vs Keyword Arguments
def calculate_numbers(a, b, operation = "add"):
    if (operation.lower() == 'add'):
        return a + b
    elif (operation.lower() == 'subtract'):
        return a - b

print(f"calculate_numbers(4, 6) is {calculate_numbers(4, 6)}")  # should give 10
print(f"calculate_numbers(10, 4, 'Subtract') is {calculate_numbers(10, 4, 'Subtract')}") # should give 6

