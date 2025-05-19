def what_if(a):
    if a >= 10:
        print("num is greater than or equal 10")
    elif a > 20:
        print("num is greater than 20")
    elif a > 30:
        print("num is greater than 30")
    else:
        print("num is less than 10")


what_if(10)

'''
Below is fizz buzz
'''
def fizz_buzz(num):
    result = ""
    if(num % 15 == 0):
        print("FizzBuzz")
        result = "FizzBuzz"
    elif(num % 3 == 0):
        print("Fizz")
        result = "Fizz"
    elif(num % 5 == 0):
        print("Buzz")
        result = "Buzz"
    else:
        print(num)
    return result

final_value = fizz_buzz(5)
print(f"yaeah---- {final_value}")
