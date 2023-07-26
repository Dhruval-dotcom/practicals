show databases;
use dhruvaldb;
show tables;
create table station (
id int primary key auto_increment,
station varchar(255)
);

create table train (
id int primary key auto_increment,
t_name varchar(255),
from_station_id int,
to_station_id int,
departure_time timestamp DEFAULT CURRENT_TIMESTAMP,
arrival_time timestamp DEFAULT CURRENT_TIMESTAMP,
created_at timestamp DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
train_no int,
foreign key (from_station_id) REFERENCES station(id),
foreign key (to_station_id) REFERENCES station(id)
);
select CURRENT_TIMESTAMP;
insert into station(station) values ('Amreli');
select * from train;
select * from station;
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('express',1,2,'2023-04-06 15:46:47','2023-04-06 15:46:47',1111);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('local',2,4,'2023-04-05 15:46:47','2023-04-08 15:46:47',2222);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('shatabdi',3,4,'2023-04-02 15:46:47','2023-04-08 03:42:47',3333);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('Express-A',1,7,'2023-04-18 15:46:47','2023-04-19 15:46:47',4444);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('Express-B',7,4,'2023-04-07 15:46:47','2023-04-08 15:46:47',5555);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('Express-c',7,6,'2023-04-08 01:46:47','2023-04-08 15:46:47',5555);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('Express-d',7,6,'2023-04-08 21:46:47','2023-04-09 15:46:47',5555);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('Express-e',7,1,'2023-04-08 21:07:07','2023-04-09 15:46:47',5555);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('Express-f',7,1,'2023-04-06 21:07:07','2023-04-09 15:46:47',5555);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('Express-g',7,6,'2023-04-06 01:46:47','2023-04-08 15:46:47',5555);
INSERT INTO train (t_name,from_station_id,to_station_id,departure_time,arrival_time,train_no) VALUES ('Express-h',9,1,'2023-04-06 23:51:07','2023-04-09 15:46:47',5555);
update train set t_name='Rajdhani Express' where t_name='Express-A';
update train set t_name='Duronto Express' where t_name='Express-B';
update train set t_name='Jan Shatabdi Express' where t_name='Express-c';
update train set t_name='Sampark Kranti Express' where t_name='Express-d';
update train set t_name='Rath Express' where t_name='Express-e';
update train set t_name='Humsafar Express' where t_name='Express-f';
update train set t_name='Kavi Guru Express' where t_name='Express-g';
update train set t_name='Gujarat Express' where t_name='Express-h';
update train set train_no=2398*6*id;
update train SET departure_time=DATE_SUB(departure_time, INTERVAL -1 day),arrival_time=DATE_SUB(arrival_time, INTERVAL -1 day);

#----------ANS-1----------
SELECT t.t_name,t.train_no,s.station as from_station,sa.station as to_station FROM train t left join station s on t.from_station_id=s.id left join station sa on t.to_station_id=sa.id where t.from_station_id = (SELECT id FROM station WHERE station = 'Mehsana');
select s.station,sa.station from train t left join station s on t.from_station_id=s.id left join station sa on t.to_station_id=sa.id;

#----------ANS-2----------
SELECT t_name,train_no,s.station as from_station,sa.station as to_station,departure_time from train left join station s on from_station_id=s.id left join station sa on to_station_id=sa.id where DATE_SUB(departure_time, INTERVAL 5 hour) > CURRENT_TIMESTAMP() ;
#SELECT DATE_SUB(departure_time, interval 5 hour),departure_time from train;

#----------ANS-3----------
SELECT t_name,train_no,departure_time,s.station as from_station,sa.station as to_station FROM train left join station s on from_station_id=s.id left join station sa on to_station_id=sa.id where from_station_id = (SELECT id FROM station WHERE station = 'Mehsana')
 and to_station_id = (SELECT id FROM station WHERE station = 'Bhuj') 
 and DATEDIFF(CURRENT_TIMESTAMP,departure_time)<=-2;

#----------ANS-4----------
SELECT t_name,departure_time,train_no,s.station as from_station,sa.station as to_station FROM train left join station s on from_station_id=s.id left join station sa on to_station_id=sa.id where to_station_id = (SELECT id FROM station WHERE station = 'Surat');

#----------ANS-5----------
#SELECT * FROM train where to_station_id = (SELECT id FROM station WHERE station = 'Bhuj') 
#and DATEDIFF(CURRENT_TIMESTAMP,departure_time);
SELECT t_name,train_no,departure_time,s.station as from_station,sa.station as to_station FROM train left join station s on from_station_id=s.id left join station sa on to_station_id=sa.id where to_station_id = (SELECT id FROM station WHERE station = 'Bhuj') 
and departure_time>CURRENT_TIMESTAMP;

#SELECT DATE_SUB(CURRENT_TIMESTAMP, INTERVAL 0 second);
#SELECT DATE_SUB(CURRENT_TIMESTAMP, INTERVAL -1 day);
#SELECT DATEDIFF(CURRENT_TIMESTAMP,departure_time),departure_time FROM train;
#SELECT DATEADD(year, 1, '2017/08/25') AS DateAdd; #
