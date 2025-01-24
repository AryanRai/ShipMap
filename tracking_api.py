import requests
from encrypt_tracking import make_tracking_request
import time

def track_package(tracking_number: str, max_retries=3) -> dict:
    """
    Sends tracking request to ParcelApp API and returns delivered_by info
    Waits for proper response before proceeding
    """
    url = "https://parcelsapp.com/api/v2/parcels"
    payload = make_tracking_request(tracking_number)
    
    headers = {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "DNT": "1",
        "Host": "parcelsapp.com",
        "Origin": "https://parcelsapp.com",
        "Referer": "https://parcelsapp.com/widget?backgroundColorButton=green&colorButton=blue&placeholder=Enter%20AWB",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "sec-ch-ua": '"Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"'
    }
    
    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        data = response.json()
        
        # Check if response contains an error message
        if 'error' in data:
            print(f"Server returned error - {data['error']}")
            return None
        
        # Check if response contains actual tracking data
        while 'states' not in data:
            print("Waiting for tracking data...")
            time.sleep(10)
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()
            data = response.json()
            
            if 'error' in data:
                print(f"Server returned error - {data['error']}")
                return None
        
        # We have a proper response, check for delivered_by
        if 'delivered_by' in data:
            print(f"Delivered by: {data['delivered_by']}")
        else:
            print("No delivered_by information found in response")
        
        return data  # Return only when we have a proper response
        
    except requests.exceptions.RequestException as e:
        print(f"Error tracking package: {e}")
        return None

# Example usage
if __name__ == "__main__":
    tracking_number = "247072290"
    result = track_package(tracking_number)
    verbose = False
    if result:
        if verbose:
            print("\nFull Response:")
            print(result) 