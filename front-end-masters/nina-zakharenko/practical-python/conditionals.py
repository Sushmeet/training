def case_sensitivity(name):
    if len(name) < 5:
        value = name.lower()
        print(name)
        print(value)
    else :
        value = name.upper()
        print(name)
        print(f"Upper case value is {value}")
    return name



lower_name = "su"
upper_name ="lksajkasjdjasdkljdkjdkjaskldjajsdajksdj"


result1 = case_sensitivity(lower_name)
result2 = case_sensitivity(upper_name)

# print(result1)
# print(result2)