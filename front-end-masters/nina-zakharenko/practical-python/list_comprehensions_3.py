#Comprehensions
# Let’s practice our comprehensions. 
# Create a list of only odd numbers between 0 and 100 using a list comprehension. 
# Then, use a comprehension to create a dictionary where the keys are the even 
# numbers from your list, and the values are random integers between 0 and 100 
# (hint: try random.randint(min, max)). 
# Finally, use a comprehension to create a set of every unique value from the above dictionary.

# give me a list with numbers from 0 to 9
list_of_numbers = [ num for num in range(0,100) if num % 2 == 0]
print(f"list_of_numbers is {list_of_numbers}")

import random
dic_example_2 = { num:random.randint(0,100) for num in list_of_numbers}
print(f"dic_example_2 is {dic_example_2} and length is {len(dic_example_2)}")

# create a dictonary which has key as name, and value as Bob
dic_example = {"name": "Bob", "age": 30}, {"name": "Alice", "age": 25, "gender": "female"}
print(f"dic_example is {dic_example} and len is {len(dic_example)}")


set_dic_example_2 = { num for num in dic_example_2.values()}
print(f"set_dic_example_2 is {set_dic_example_2} and len is {len(set_dic_example_2)}")






