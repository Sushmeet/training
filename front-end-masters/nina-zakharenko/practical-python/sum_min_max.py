my_list = [1, 2, 3, 4, 5]

# Sum the numbers in a list
my_sum = sum(my_list) 
print(f"my sum is {my_sum}")

my_min = min([num for num in range(0, 100) if num % 3 == 0])
print(f"my min  number from a list of 0 to 100 is {my_min}")

my_max = max([ num for num in range(0, 100) if num % 3 == 0])
print(f"my max is {my_max}")

range()