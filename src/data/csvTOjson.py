import csv, json

def csv_to_json(csvFilePath, jsonFilePath):
    data = {}
     
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf, delimiter=';')
        key = -1
        for rows in csvReader:
            key = key + 1
            data[key] = rows
 
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
          
csvFilePath = r'FlightData.csv'
jsonFilePath = r'FlightDataArray.json'
csv_to_json(csvFilePath, jsonFilePath)