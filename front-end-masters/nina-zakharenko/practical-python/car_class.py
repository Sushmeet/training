class Car:
    runs = True
    def start(self):
        if self.runs:
            print("car has already started")
        else:
            print('car no  Start SUshi')


my_car = Car()
print(f"mycar runs is {my_car.runs}")
my_car.start()

my_car.runs = False
my_car.start()

my_another_car = Car()
my_another_car.start()