use dhruvaldb;
select * from train;
select * from train left join station on train.from_station_id=station.id or train.to_station_id=station.id;
select s.station,sa.station from train t left join station s on t.from_station_id=s.id left join station sa on t.to_station_id=sa.id;
update train set t_name='Rajdhani Express' where t_name='Rajdhani Express2';
update train set t_name='Duronto Express' where t_name='Express-B';
update train set t_name='Jan Shatabdi Express' where t_name='Express-c';
update train set t_name='Sampark Kranti Express' where t_name='Express-d';
update train set t_name='Rath Express' where t_name='Express-e';
update train set t_name='Humsafar Express' where t_name='Express-f';
update train set t_name='Kavi Guru Express' where t_name='Express-g';
update train set t_name='Gujarat Express' where t_name='Gujarat Express';
SELECT TIMESTAMPDIFF(MINUTE,'2009-05-18 11:45:42','2009-05-20 15:16:39');
update train SET departure_time=DATE_SUB(departure_time, INTERVAL -1 day),arrival_time=DATE_SUB(arrival_time, INTERVAL -1 day);

Create Trigger before_insert_row   
BEFORE UPDATE ON train FOR EACH ROW  
SET NEW.updated_at = current_timestamp();    

show triggers;
show triggers from dhruvaldb;

drop trigger before_insert_row;
show triggers from dhruvaldb;


#SET NEW.updated_at = current_timestamp(); 
create view v as select * from station;
select * from v;
select * from station;
insert into v (station) values('pune');
show variables like '%autocommit%';

alter database dhruvaldb MODIFY NAME = dhruvaldbx;

use dhruvaldb;
show tables;
CREATE TABLE IF NOT EXISTS practiceajax (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(80),
    image VARCHAR(30),
    email VARCHAR(30),
    doi varchar(30),
    PRIMARY KEY (id)
);
 ALTER TABLE practiceajax MODIFY COLUMN image VARCHAR (500);


select * from practiceajax;