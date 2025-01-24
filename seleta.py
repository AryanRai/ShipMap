from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Get BL number from the user
bl_number = input("Enter the BL number: ")

# Create the URL with the BL number
url = f"https://parcelsapp.com/en/tracking/{bl_number}"

# Set up the WebDriver
service = Service('chromedriver.exe')  # Replace with the path to your ChromeDriver
driver = webdriver.Chrome(service=service)

try:
    # Load the URL
    driver.get(url)

    # Wait for the page to load and find the "Track Package" button
    wait = WebDriverWait(driver, 1000)
    track_button = wait.until(EC.element_to_be_clickable((By.XPATH, '//button[contains(text(), "Track Package")]')))

    # Click the "Track Package" button
    track_button.click()

    # Wait for the estimated delivery info to appear
    estimated_delivery_element = wait.until(EC.presence_of_element_located((By.XPATH, '//span[contains(text(), "Estimated Delivery")]/following-sibling::span')))

    # Retrieve and print the estimated delivery info
    estimated_delivery = estimated_delivery_element.text
    print(f"Estimated Delivery: {estimated_delivery}")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # Close the browser
    driver.quit()
