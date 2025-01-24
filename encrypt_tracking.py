import urllib.parse

def encrypt_tracking_number(tracking_number: str) -> str:
    # The encryption seed array from the JS code
    h = [1, 2, 8, 4, 5, 6, 7, 3]
    
    # Calculate encryption key: sum(2 * each value in h)
    encryption_key = sum(2 * x for x in h)  # = 72
    
    # First encode the tracking number
    encoded = urllib.parse.quote(tracking_number)
    
    # Apply the obfuscation
    result = []
    for char in encoded:
        ascii_code = ord(char)
        if ascii_code <= 126:
            # Apply the same transformation as the JS code:
            # (ascii_code + key) % 126
            new_ascii = (ascii_code + encryption_key) % 126
            # URL encode the character if it's not alphanumeric
            new_char = chr(new_ascii)
            if not new_char.isalnum() and new_char not in '-._~':
                new_char = urllib.parse.quote(new_char)
            result.append(new_char)
        else:
            result.append(char)
    
    return ''.join(result)

def make_tracking_request(tracking_number: str) -> dict:
    """
    Creates the full tracking request with all required parameters
    """
    encrypted_tracking = encrypt_tracking_number(tracking_number)
    
    # Get screen and window dimensions
    screen_width = 1920
    screen_height = 1032
    window_width = 1904
    window_height = 992
    content_width = 600
    content_height = 400
    
    # Create the security string (se parameter)
    se_params = [
        f"{window_width}x{window_height}",
        f"{screen_width}x{screen_height}",
        f"{content_width}x{content_height}",
        "no",  # document.hidden
        "Win32",  # navigator.platform
        "Gecko",  # product
        "Mozilla",  # appCodeName
        "Netscape",  # appName
        "Google Inc.",  # vendor
        "true",  # chrome
        "true",  # plugins
        "Google Inc. (Intel)",  # UNMASKED_VENDOR_WEBGL
        "ANGLE (Intel, Intel(R) UHD Graphics (0x000046A3) Direct3D11 vs_5_0 ps_5_0, D3D11)",  # UNMASKED_RENDERER_WEBGL
        "182",  # tracking number length
        "9",  # tracking number hash
        "1215713118"  # final hash
    ]
    
    # These match the parameters sent by the widget
    payload = {
        "trackingId": encrypted_tracking,
        "carrier": "Auto-Detect",
        "language": "en",
        "country": "Unknown",
        "platform": "web-desktop",
        "wd": False,
        "c": True,
        "p": 5,
        "l": 2,
        "se": ",".join(se_params)
    }
    
    return payload

# Example usage
if __name__ == "__main__":
    # Example tracking number
    tracking_num = "245244877"
    
    # Encrypt the tracking number
    encrypted = encrypt_tracking_number(tracking_num)
    print(f"Original: {tracking_num}")
    print(f"Encrypted: {encrypted}")
    
    # Get full request payload
    payload = make_tracking_request(tracking_num)
    print("\nFull request payload:")
    print(payload) 