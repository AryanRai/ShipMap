import requests

url = "https://api.sinay.ai/etac/api/v1/compute-eta"

payload = {
    "vessel": { "mmsi": 477776100 },
    "arrival": { "portCode": "INNSA" },
    "departure": {
        "portCode": "USNYC",
        "date": "2024-06-17T13:38:00-04:00"
    }
}
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "API_KEY": "6c82ec9b-e0ec-4eba-a114-2c53dceabda7"
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)