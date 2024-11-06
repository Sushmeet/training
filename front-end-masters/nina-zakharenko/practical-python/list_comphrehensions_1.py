
# simple python methon to go go over a list, and perform some operations and store the list in an empty list
#SetUp
names = ['Sushi', "Robert", 'house', 'joker']

length_of_names = []
for name in names:
    length_of_names.append(len(name))
print(f'length_of_names--' , length_of_names)


# list comprehension, where you go over list, perform an operation with for loop, and return result in one line.
length_of_names_list_comphrehension = [len(name) for name in names]
print(f'length_of_names--2' , length_of_names_list_comphrehension)


# same thing as above but lets return a tuple mytuple = ("apple", "banana", "cherry")
length_of_names_list_comphrehension_with_tuple = [ (name, len(name)) for name in names]
print(length_of_names_list_comphrehension_with_tuple)


#original List is unaffected
print(names)

