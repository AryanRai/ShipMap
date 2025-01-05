import pandas as pd
import requests

API_KEYS = {
    "maersk": "your_maersk_api_key",
    "cma_cgm": "dCcBcF7hkvkOH3QtfAl8QkSiRU25kNXd",
    "hapag": "your_hapag_loyd_api_key",
    "oocl": "your_oocl_api_key",
    "msc": "your_msc_api_key",
}

def fetch_maersk_eta(bl_number):
    url = f"https://api.maersk.com/tracking/v1/shipments?search={bl_number}"
    headers = {"Authorization": f"Bearer {API_KEYS['maersk']}"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json().get("estimatedTimeOfArrival", "N/A")
    print(f"Error for Maersk BL {bl_number}: {response.text}")
    return f"Error: {response.status_code}"

# Similar fetch functions for CMA CGM, Hapag, OOCL, MSC...

def fetch_eta(row):
    try:
        shipping_line = row['Shipping Line'].strip().lower()
        bl_number = row['BL']
    except KeyError as e:
        return f"Missing column: {e}"
    except Exception as e:
        return f"Error: {e}"

    if shipping_line == "maersk":
        return fetch_maersk_eta(bl_number)
    elif shipping_line == "cma cgm":
        return fetch_cma_cgm_eta(bl_number)
    elif shipping_line == "hapag":
        return fetch_hapag_eta(bl_number)
    elif shipping_line == "oocl":
        return fetch_oocl_eta(bl_number)
    elif shipping_line == "msc":
        return fetch_msc_eta(bl_number)
    else:
        return "Unsupported Shipping Line"

if __name__ == "__main__":
    input_file = "shipping_data.xlsx"
    output_file = "updated_shipping_data.xlsx"

    try:
        df = pd.read_excel(input_file)
        df.columns = df.columns.str.strip()  # Clean column names
        df['Updated ETA'] = df.apply(fetch_eta, axis=1)
        df.to_excel(output_file, index=False)
        print(f"Updated shipping data saved to {output_file}")
    except Exception as e:
        print(f"Error: {e}")
