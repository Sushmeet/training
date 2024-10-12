def name_length(names): 
    counter = 0
    for name in names:
        counter = counter + 1 
        print(f"outside counter value is {counter}")

        if name == 'Sushi':
            print(f"counter value is {counter}")
            return name

    return name
        

result = name_length(['sony', 'tike', 'Sushi', 'bobby', 'klsdjask'])

print('result----', result)