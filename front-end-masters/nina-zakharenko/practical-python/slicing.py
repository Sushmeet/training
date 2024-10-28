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

