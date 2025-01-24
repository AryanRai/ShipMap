import requests
import time

# Replace with your Parcels API key
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjMWVkMDYyMC1jYjNiLTExZWYtYTMwYy0xM2VhZTliOTQ3YmEiLCJzdWJJZCI6IjY3N2EzZDJhOGMzYzU3MTk3NGQxMDM5MCIsImlhdCI6MTczNjA2NDI5OH0.iHyoNiaRs2vr9t5QSXfjL-4YJ3q76gvMR_tmQMvUUbY"
TRACKING_URL = "https://parcelsapp.com/api/v3/shipments/tracking"

def track_bl_number(bl_number, destination_country="United States"):
    """
    Tracks a shipment using a BL (Bill of Lading) number.
    
    :param bl_number: The BL number to track.
    :param destination_country: Destination country (default is United States).
    """
    # Step 1: Create Tracking Request
    print(f"Initiating tracking request for BL Number: {bl_number}")
    data = {
        "shipments": [
            {
                "trackingId": bl_number,
                "destinationCountry": destination_country
            }
        ],
        "language": "en",
        "apiKey": API_KEY
    }
    
    response = requests.post(TRACKING_URL, json=data)
    if response.status_code != 200:
        print("Error initiating tracking request:", response.text)
        return
    
    # Get the UUID from the response
    uuid = response.json().get("uuid")
    if not uuid:
        print("Error: No UUID returned from the tracking request.")
        return
    print(f"Tracking request initiated. UUID: {uuid}")
    
    # Step 2: Poll for Tracking Results
    print("Polling for tracking results...")
    while True:
        poll_response = requests.get(TRACKING_URL, params={"uuid": uuid, "apiKey": API_KEY})
        if poll_response.status_code != 200:
            print("Error polling for tracking results:", poll_response.text)
            break
        
        poll_data = poll_response.json()
        if poll_data.get("done"):
            print("Tracking Complete!")
            print("Tracking Results:")
            print(poll_data)
            break
        else:
            print("Tracking in progress...")
            time.sleep(1)  # Poll every second

# Example usage
if __name__ == "__main__":
    bl_number = input("Enter the BL Number to track: ").strip()
    destination_country = input("Enter the destination country (default: United States): ").strip() or "United States"
    track_bl_number(bl_number, destination_country)
