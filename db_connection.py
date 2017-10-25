import psycopg2

conn = psycopg2.connect(host="ec2-18-221-213-202.us-east-2.compute.amazonaws.com", port="5432",
                        database="nfldb", user="Shashank", password="shashank")
cursor = conn.cursor()

print('PostgreSQL database version:')
cursor.execute("SELECT * from team")
rows = cursor.fetchall()
for row in rows:
    print(row)