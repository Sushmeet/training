
# simple python methon to go go over a list, and perform some operations and store the list in an empty list
names = ['Sushi', "Robert", 'house', 'joker']

# you can also add conditionals in the list comprehension 
length_of_even_names = [len(name) for name in names if len(name) % 2 == 0]
print(f"length_of_even_names is {length_of_even_names}")

# add conditionals and return a tuple
length_of_names_list_comphrehension_with_tuple = [ (name, len(name)) for name in names if len(name) % 2 == 0]
print(length_of_names_list_comphrehension_with_tuple)


# split and join
my_string = 'This is an example of how to split'
split_string = my_string.split(' ')
new_string = ', '.join(split_string)


print(split_string)
print(new_string)



#original List is unaffected
print(f'Original List of Names is {names}')

