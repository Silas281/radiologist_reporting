# Dockerfile for the MySQL database

# Use the official MySQL image as a base
FROM mysql:8

# Copy the database SQL script
COPY ./database.sql /docker-entrypoint-initdb.d/database.sql

# Set the MySQL root password
ENV MYSQL_ROOT_PASSWORD=admin

# Allow connections from all hosts
RUN echo "[mysqld]\nbind-address = 0.0.0.0" >> /etc/mysql/my.cnf
