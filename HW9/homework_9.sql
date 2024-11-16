--6a
create database `homework_9`;

--6b
create table `library` (
    `id`    int(11) NOT NULL AUTO_INCREMENT,
    `name`  varchar(80) NOT NULL,
    primary key (`id`)
);

--6c 
create table `books` (
    `id`    int(11) NOT NULL AUTO_INCREMENT,
    `name`  varchar(80) NOT NULL,
    primary key (`id`)
);


--6d
create table `libraryBook` (
    `id`    int(11) NOT NULL AUTO_INCREMENT,
    `libraryID` int(11) NOT NULL,
    `bookID`    int(11) NOT NULL,
    primary key (`id`),
    foreign key (`libraryID`) references `library`(`id`) on delete cascade,
    foreign key (`bookID`) references `books`(`id`) on delete cascade
);

--7a 
insert into `library` (`name`)
values ('Parkchester Library'),
('Walsh Library'),
('Brooklyn Library');

insert into `books` (`name`)
values ('Harry Potter'),
('All The Light We Cannot See'),
('1984');

--7b
insert into `libraryBook` (`libraryID`, `bookID`) 
values (1,1),
(1,2),
(2,3),
(3,1),
(3,2);

--7c
select * from `library` where `id` = 1;

--7d
select * from `books` where `name` like '%The%';

--7e
select * from `books` order by `name` ASC;


--8
select `books`.`name` as `book_name`, `library`.`name` as `library_name` 
from `books` 
join `libraryBook` ON `books`.`id` = `libraryBook`.`bookID` 
join `library` on `librarybook`.`libraryID` = `library`.`id`;

--9
update `books`
set `name` = 'Night'
where `id` = 3;

--10
delete from `books` 
where `id` = 1;