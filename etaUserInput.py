import requests

# CMA CGM API Key (Replace with your actual API key)
API_KEY = "dCcBcF7hkvkOH3QtfAl8QkSiRU25kNXd"

# Base URL for the operation.trackandtrace.v1 API
BASE_URL = "https://apis.cma-cgm.net/operation/trackandtrace/v1"

def fetch_cma_eta(bl_number):
    """
    Fetch Estimated Time of Arrival (ETA) for a shipment using CMA CGM API.

    Args:
        bl_number (str): The Bill of Lading (BL) number.

    Returns:
        str: The Estimated Time of Arrival (ETA) or an error message.
    """
    url = f"{BASE_URL}/shipment?blNumber={bl_number}"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }

    try:
        # Send a GET request to the API
        response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            # Parse the JSON response
            data = response.json()
            
            # Extract ETA from the response
            eta = data.get("estimatedTimeOfArrival", "N/A")
            return eta
        else:
            # Handle API errors
            return f"Error: {response.status_code} - {response.text}"
    except requests.RequestException as e:
        # Handle connection errors
        return f"Error: Unable to connect to API. Details: {e}"

# Main function to input BL number and fetch ETA
if __name__ == "__main__":
    print("CMA CGM Track and Trace - Fetch ETA")
    print("===================================")

    # Input BL number
    bl_number = input("Enter the Bill of Lading (BL) number: ").strip()

    # Fetch ETA
    eta = fetch_cma_eta(bl_number)
    print(f"Estimated Time of Arrival (ETA): {eta}")
