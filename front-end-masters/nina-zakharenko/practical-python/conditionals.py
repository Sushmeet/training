def case_sensitivity(name):
    if len(name) < 5:
        value = name.lower()
        print(f"Original Input---{name}" )
        print(f"Final Output---{value}")
    else :
        value = name.upper()
        print(f"Original Input---{name}")
        print(f"Final Output--- {value}")
    return value



lower_name = "HELP"
upper_name ="Mochitokitravel"


result1 = case_sensitivity(lower_name)
result2 = case_sensitivity(upper_name)

print(f"rerturned result for lower-----{result1}")
print(f"rerturned result for upper------{result2}")

