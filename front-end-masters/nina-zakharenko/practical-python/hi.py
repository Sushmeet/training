my_list = ["hello", "sugar", "hi"]
print(my_list)


numbers_list = [1, 5, 2, 3, 10, 7]
print(numbers_list)


b = (1, 2, 'help') # tuple....
print('a----', b, 'count: ', b.count)



result = my_list.sort()
numbers_list.sort(reverse=True)

##################################################
# function that returns a tuple , which can be then unpackaged.
def http_status_code():
    return (200, 'ok', 123)

code, value, bale = http_status_code()
print('code---', code, 'value---', value, 'bale---', bale)
