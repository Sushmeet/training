student_info = {"name": "sushi", "id": 123}

print(f'student_inf0--' , student_info)
print(f'student_name is ', student_info["name"])

student_info["name"] = "Ringo Star"
print(f'student_name is ', student_info["name"])

# Python-specific dictionary features
# Using different types as keys
mixed_dict = {
    "string_key": "value",
    42: "number as key",
    (1, 2): "tuple as key"  # This isn't possible in JavaScript!
}
print("\nMixed key types:", mixed_dict)

# Dictionary methods
print("\nDictionary methods examples:")
print("Keys:", student_info.keys())
print("Values:", student_info.values())
print("Items:", student_info.items())

# Dictionary comprehension (Python-specific feature)
squares = {x: x*x for x in range(5)}
print("\nDictionary comprehension:", squares)

