student_names = ['sushi', 'tommy', 'rocky'] # lists
for student in student_names:
        print(f'student is {student}')

# tuples

boy_tuples = ('sushi', 'toniii', 'jackyy') # tuples
for boy in boy_tuples:
        print(f'boy is {boy}')


# tuples
nested_tuple = ((1, 2), (3,4)) 
for nest in nested_tuple:
    print(f"nested {nest}")


for num in range(2, 4):
        print(f'num is in range {num}')

# colors = ('Red', 'Green', 'Blue', 'Orange')
colors = ['Red', 'Green', 'Blue', 'Orange']


for index, color in enumerate(colors):
        print(f'index is {index} and color is {color}')


# Looping over a dictionary
hex_colors = {"Red": "FF0000", "Green": "00FF00", "Blue": "0000FF"}

for color in hex_colors:
        print(f'color fo hex_color is {color}')

for color, hex_color in hex_colors.items():
        print(f'color is {color} and hex_color is {hex_color}')