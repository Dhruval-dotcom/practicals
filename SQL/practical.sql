
#creating database 
CREATE DATABASE customer_database;
USE customer_database;

#creating user table 
CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    email VARCHAR(80),
    mobile VARCHAR(10),
    PRIMARY KEY (id)
);

SHOW TABLES;

#inserting values in user table
INSERT INTO user (name,email,mobile) VALUES ('Akon','Akon@gmail.com',8586973940)
,('Rohit','Rohit@gmail.com',2149401750)
,('Anna','Anna@gmail.com',4192525618)
,('Mohit','Mohit@gmail.com',4079033271)
,('Mathew','Mathew@gmail.com',9413608187)
,('Sahil','Sahil@gmail.com',9918867528)
,('Mohit','mohit@gmail.com',2971784298)
,('Siddharth','Siddharth@apc.ac.in',6335442883)
,('Chirag','Chirag@apc.ac.in',5018687581)
,('Avinash','Avinash@gmail.com',4180246464)
,('Sachin','Sachin@apc.ac.in',6366532292)
,('Kamlesh','Kamlesh@apc.ac.in',8324261444)
,('Alpesh','Alpesh@apc.ac.in',6504457758)
,('Jalpa','Jalpa@gmail.com',5979778114)
,('Ruchita','Ruchita@gmail.com',9319839174)
,('Hetal','Hetal@gmail.com',2923840786)
,('Arjun','Arjun@apc.ac.in',4532925559)
,('Nayan','Nayan@apc.ac.in',5162740823)
,('Aniket','Aniket@gmail.com',4156829549)
,('Ankit','Ankit@apc.ac.in',8958089197)
,('Khyati','Khyati@apc.ac.in',4156858955)
,('Sunita','Sunita@gmail.com',4101738668)
,('Harshil','Harshil@apc.ac.in',5265251157)
,('Jignesh','Jignesh@gmail.com',5392895077)
,('Gaurav','Gaurav@gmail.com',2121877384);



#creating product table
CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(80),
    price INT,
    PRIMARY KEY (id)
);

#Inserting values in product table
INSERT INTO product (product_name,price) VALUES ('Garnier cream',76)
,('Olay cream',927)
,('Patanjali shampoo',506)
,('Fan',611)
,('LG AC',84)
,('Loreal paris ',385)
,('Tresseme',861)
,('foundation',615)
,('lip stick',860)
,('eyelash cream',929)
,('nail kit',131)
,('hair conditioner',828)
,('RIn powder',74)
,('soap',738)
,('winter cream',546);


#creating user_order table
CREATE TABLE user_order (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    order_status VARCHAR(20),
    order_date TIMESTAMP,
    expected_delivery_date TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES user (id)
);

#Inserting values in user_order
INSERT INTO user_order (user_id,order_status,order_date,expected_delivery_date) VALUES (2,'Shipped','2022-10-11 10:21:53','2022-10-18 13:57:26')
,(23,'Refunded','2022-12-06 09:45:45','2022-12-07 03:19:31')
,(2,'Awaiting Shipment','2023-04-14 09:42:32','2023-04-19 07:14:50')
,(3,'Shipped','2022-10-18 10:44:44','2022-11-08 15:54:47')
,(5,'Shipped','2023-01-12 11:33:52','2023-01-13 10:33:15')
,(8,'Awaiting Shipment','2023-04-01 10:26:28','2023-04-08 10:22:22')
,(12,'Shipped','2022-10-18 11:48:43','2022-12-06 08:41:11')
,(14,'Shipped','2022-12-18 09:45:21','2023-01-03 15:39:25')
,(8,'Awaiting Shipment','2023-04-14 10:08:09','2023-04-19 23:18:48')
,(12,'Shipped','2022-11-18 09:45:21','2022-12-06 08:42:08')
,(4,'Shipped','2022-10-18 11:23:07','2022-10-30 10:19:23')
,(12,'Cancelled','2022-12-18 09:01:25','2023-01-01 16:43:36')
,(12,'Shipped','2022-10-17 09:12:07','2022-11-10 08:35:41')
,(14,'Awaiting Shipment','2023-04-14 09:43:49','2023-04-14 10:20:08')
,(7,'Shipped','2022-10-18 10:03:11','2022-11-23 11:51:07')
,(16,'Shipped','2022-12-18 10:51:08','2023-01-19 19:44:26')
,(25,'Shipped','2022-11-19 09:05:46','2022-11-20 09:33:43')
,(12,'Awaiting Shipment','2023-04-14 09:23:18','2023-04-19 02:43:21')
,(5,'Shipped','2022-10-01 10:02:54','2022-10-18 02:11:13')
,(7,'Shipped','2022-11-01 11:50:53','2022-11-02 13:01:31')
,(6,'Refunded','2022-12-18 11:43:16','2022-12-20 08:33:44')
,(22,'Shipped','2023-03-18 11:12:24','2023-03-20 06:15:45')
,(11,'Cancelled','2022-10-18 11:35:22','2022-10-30 21:53:00')
,(1,'Awaiting Shipment','2023-04-18 09:01:25','2023-04-20 00:01:29')
,(1,'Shipped','2023-01-18 09:05:59','2023-01-30 09:59:30');
UPDATE user_order SET expected_delivery_date=DATE_SUB(expected_delivery_date,INTERVAL -30 DAY) WHERE order_status='Awaiting Shipment';

#creating order_detail product
CREATE TABLE order_detail (
    id INT NOT NULL AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id)
        REFERENCES user_order (id),
    FOREIGN KEY (product_id)
        REFERENCES product (id)
);

#Inserting values in order_detail
INSERT INTO order_detail (order_id,product_id) VALUES (1,3)
, (1,5)
, (1,13)
, (2,7)
, (2,8)
, (3,3)
, (3,6)
, (3,3)
, (4,9)
, (4,7)
, (5,12)
, (6,15)
, (7,8)
, (7,14)
, (8,7)
, (8,9)
, (8,2)
, (8,3)
, (9,12)
, (9,6)
, (9,10)
, (9,8)
, (10,1)
, (11,4)
, (12,2)
, (13,5)
, (13,9)
, (14,3)
, (14,2)
, (14,7)
, (15,4)
, (16,14)
, (17,1)
, (17,8)
, (17,7)
, (17,2)
, (18,8)
, (19,10)
, (20,13)
, (21,2)
, (22,5)
, (23,8)
, (23,14)
, (24,2)
, (25,15)
, (25,1);


#que 1 User order list with expected number of delivery dates
# STORED PROCEDURE is used here
DELIMITER $$  
CREATE PROCEDURE customer_list()
BEGIN
SELECT 
    d.name,
    b.product_name,
    c.order_date,
    CASE
        WHEN
            c.order_status = 'Awaiting Shipment'
        THEN
            DATEDIFF(c.expected_delivery_date,
                    CURRENT_TIMESTAMP)
        ELSE c.order_status
    END AS Expected_days
FROM
    order_detail a
        INNER JOIN
    product b ON a.product_id = b.id
        INNER JOIN
    user_order c ON c.id = a.order_id
        INNER JOIN
    user d ON c.user_id = d.id;
END $$ 
DELIMITER ;


CALL customer_list;





#que 2 - ALl undelivered orders
WITH shipped_order_list AS(
SELECT 
    user.id,
    user.name,
    user_order.order_status,
    user_order.order_date,
    user_order.expected_delivery_date
FROM
    user_order
        INNER JOIN
    user ON user_order.user_id = user.id
WHERE
    user_order.order_status <> 'Shipped'
        AND user_order.order_status <> 'Cancelled'
        AND user_order.order_status <> 'Refunded'
)
SELECT 
	*
FROM 
	shipped_order_list;





#que 2 - 5 most recent orders
SELECT 
    user_order.id AS order_id,
    user.name,
    user_order.order_status,
    user_order.order_date,
    user_order.expected_delivery_date
FROM
    user_order
        INNER JOIN
    user ON user.id = user_order.user_id
ORDER BY user_order.order_date DESC
LIMIT 5; 





#que 2 - Top 5 active users
SELECT 
    user.name,
    user.email,
    user.mobile,
    COUNT(user_order.id) AS number_of_order
FROM
    user_order
        INNER JOIN
    user ON user.id = user_order.user_id
GROUP BY user_order.user_id
ORDER BY COUNT(user_order.id) DESC
LIMIT 5;





#que 2 Inactive users
SELECT 
    user.id, user.name, user.email
FROM
    user_order
        RIGHT JOIN
    user ON user.id = user_order.user_id
WHERE
    user_order.user_id IS NULL
ORDER BY user.name;





#que 2 -Top 5 most purchased orders
SELECT 
    product.product_name,
    COUNT(order_detail.product_id) AS Number_of_times
FROM
    order_detail
        INNER JOIN
    product ON product.id = order_detail.product_id
GROUP BY order_detail.product_id
ORDER BY COUNT(order_detail.product_id) DESC
LIMIT 5;





#que 2 - Most Expensive and most cheapest order
SELECT 
    *
FROM
    (SELECT 
        user_order.user_id,
            user.name,
            order_detail.order_id,
            SUM(product.price) AS price
    FROM
        order_detail
    INNER JOIN product ON product.id = order_detail.product_id
    INNER JOIN user_order ON user_order.id = order_detail.order_id
    INNER JOIN user ON user.id = user_order.user_id
    GROUP BY order_detail.order_id
    ORDER BY SUM(product.price)
    LIMIT 1) x 
UNION SELECT 
    *
FROM
    (SELECT 
        user_order.user_id,
            user.name,
            order_detail.order_id,
            SUM(product.price) AS price
    FROM
        order_detail
    INNER JOIN product ON product.id = order_detail.product_id
    INNER JOIN user_order ON user_order.id = order_detail.order_id
    INNER JOIN user ON user.id = user_order.user_id
    GROUP BY order_detail.order_id
    ORDER BY SUM(product.price) DESC
    LIMIT 1) y;

show grants;

ALTER USER 'admin'@'localhost' IDENTIFIED BY 'MyNewPass';


