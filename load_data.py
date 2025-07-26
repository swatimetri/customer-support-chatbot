import pandas as pd
import mysql.connector

# Connect to DB
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='Swa@12345',
    database='ecommerce_chatbot'
)
cursor = conn.cursor()

# Load and insert products
products = pd.read_csv('products.csv')
inventory = pd.read_csv('inventory.csv')
for _, row in products.iterrows():
    cursor.execute("""
        INSERT INTO products (product_id, name, category, price, total_sold)
        VALUES (%s, %s, %s, %s, %s)
    """, tuple(row))

# Load and insert inventory
inventory = pd.read_csv('path/to/inventory.csv')
for _, row in inventory.iterrows():
    cursor.execute("""
        INSERT INTO inventory (product_id, stock)
        VALUES (%s, %s)
    """, tuple(row))

# Load and insert orders
orders = pd.read_csv('path/to/orders.csv')
for _, row in orders.iterrows():
    cursor.execute("""
        INSERT INTO orders (order_id, product_id, status, order_date)
        VALUES (%s, %s, %s, %s)
    """, tuple(row))

conn.commit()
cursor.close()
conn.close()
