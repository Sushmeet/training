# slicing is an easy way to create sub-lists from another list.
my_list = [1, 2, 3, 4]
my_list_sliced = my_list[0:3]
print(f"my_list_sliced is {my_list_sliced}")


# slicing a string
my_string = "Hello, World!"
my_string_sliced = my_string[7:12]
print(f"my_string_sliced is {my_string_sliced}")


# Check out lopsided Slicing 

my_string[:5] # from zero to 5 gives  'Hello'

my_string[7:] # from 7 to the end gives 'world!'

# copy the whole list by leaving both the beginning and the ending out.
my_new_string = my_string[:] # my_new_string is 'Hello, world!'

#negative indexing.
my_string[-1]



# get last two characters
my_list_sushi = ["h", "e", "l", "l", "o", "!"]
print(f"my_list_sushi len is {len(my_list_sushi)}")
answer = my_list_sushi[4:]
print(f"answer is {answer}")


# make a list of numbers from 0 to 100
my_list_0_to_100 = [ num for num in range(0,101)]
print(f"my_list_0_to_100 is {my_list_0_to_100}")

# 
my_list_0_to_100[30:70:2]
print(f"my_list_0_to_100[30:70:2] is {my_list_0_to_100[30:70:2]}")

my_list_0_to_100_reverse = my_list_0_to_100[::-1]
print(f"my_list_0_to_100_reverse is {my_list_0_to_100_reverse}")


# sliing time
import random
names = ["Nina", "Max", "Floyd", "Lloyd"]
scores = [ random.randint(0,100) for _ in names]
print(f"names is {names}")
print(f"scores is {scores}")

names.pop(3)
for name, score in zip(names, scores):
    print(f"Name is {name} and score is {score}")