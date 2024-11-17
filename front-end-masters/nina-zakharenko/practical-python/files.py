import json
import pprint
with open("file_cities.json") as cities_files:
    cities_data = json.load(cities_files) 
    # print(f" cities data is {cities_data}")

pprint.pprint(cities_data)