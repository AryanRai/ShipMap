import pandas as pd
from tracking_api import track_package
import time

def process_tracking_numbers(file_path: str):
    """
    Read tracking numbers from Excel and track each one
    """
    # Load the Excel file
    df = pd.read_excel(file_path, header=None)

    # Find the row that contains relevant column names (Shipping Line and BL)
    shipping_line_keywords = ['shipping', 'line']
    bl_keywords = ['bl']

    # Function to find the column name based on keywords
    def find_column_by_keyword(df, keywords):
        for col in df.columns:
            for keyword in keywords:
                if df[col].astype(str).str.contains(keyword, case=False, na=False).any():
                    return col
        return None

    # Find the columns
    shipping_col = find_column_by_keyword(df, shipping_line_keywords)
    bl_col = find_column_by_keyword(df, bl_keywords)

    if shipping_col is not None and bl_col is not None:
        # Clean up the DataFrame to only include the relevant columns
        shipping_info = df[[shipping_col, bl_col]].dropna()
        
        print(f"\nProcessing {len(shipping_info)} tracking numbers...")
        
        # Process each tracking number
        for index, row in shipping_info.iterrows():
            tracking_number = str(row[bl_col]).strip()
            shipping_line = str(row[shipping_col]).strip()
            
            print(f"\nTracking number: {tracking_number}")
            print(f"Shipping line: {shipping_line}")
            
            # Track the package
            result = track_package(tracking_number)
            
            # Add a delay between requests to avoid rate limiting
            time.sleep(10)
            
            print("-" * 50)
    else:
        print("Could not find the required columns.")

if __name__ == "__main__":
    # Replace with the actual file path
    file_path = 'shipping_data.xlsx'
    process_tracking_numbers(file_path)
