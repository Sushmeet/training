class Car:
    runs = True
    carName = "toyota"

    def start(self):
        if self.runs == True:
            print(f"{self.carName} is working {self.runs}")
        elif self.runs == False:
            print(f"{self.carName} is not working {self.runs}")
        else :
            print(f"i don't know what is going on")

            
my_car = Car()
my_car.start()
my_car.runs = False
my_car.start()

my_audi = Car()
my_audi.start()

my_honda = Car()
my_honda.carName = "Honda" 

Car.start(my_honda)

Car.start(my_honda)