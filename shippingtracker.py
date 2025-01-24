import requests

# Get BL number from the user
shipment_number = input("Enter the BL number: ")

# Define the API endpoint and key
url = f"https://api.sinay.ai/container-tracking/api/v2/shipment?shipmentNumber={shipment_number}"
headers = {
    "accept": "application/json",
    "API_KEY": "6c82ec9b-e0ec-4eba-a114-2c53dceabda7"
}

# Make the API request
response = requests.get(url, headers=headers)

# Check the response and print the result
if response.status_code == 200:
    print("Response data:")
    print(response.json())  # Parse JSON for better readability
else:
    print(f"Failed to fetch data. Status code: {response.status_code}")
    print(response.text)
