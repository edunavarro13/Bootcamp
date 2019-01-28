SHOW databases;
create database gtt_data;
use gtt_data;
show tables;
create table user (
	id int auto_increment primary key,
	username varchar(50) unique not null,
	pass varchar(32) not null,
	email varchar(50) not null,
	role enum('admin', 'user') not null
);
describe user;
insert into user values(default, 'edunavarro13', '1234', 'edunavarro13', 'admin');
insert into user values(default, 'edunavarro', 'pass', 'edunavarro', 'user');
select * from user;
create table user_jira (
    user_id int primary key,
	username varchar(50) unique not null,
	pass varchar(32) not null,
	url varchar(50) not null,
    proyect varchar(50) not null,
	component varchar(50) not null,
    foreign key (user_id) references user(id)
);
describe user_jira;
create table certificate (
    id int auto_increment primary key,
	alias varchar(50) unique not null,
	entidad_emisora varchar(50) not null,
	num_serie varchar(50) not null unique,
    subject varchar(50) not null,
	caducidad date not null,
    contraseña varchar(50) not null,
    id_orga varchar(50) not null,
    cliente varchar(50) not null,
    lista_integraciones varchar(50),
    contacto_email varchar(50) not null,
    repositorio varchar(100) not null,
    observaciones longtext,
    user_id int not null,
    foreign key (user_id) references user(id)
);
describe certificate;