----------------------------------
# spring_boot_and_angular
-----------------------------------
In this project, CRUD operation are included using springboot api and angular.

## Check out sources

git clone https://github.com/AungKoLin828/spring_boot_and_angular.git

## Backend Prepare
Import project[springboot_api]

### Install all spring-* jars into your local Maven cache

mvn install

## Frond-end Prepare

Import project[angular_testing]

### Install npm
npm install

## PostgresSQL Database Setup
1.Create "sample_db" login role with passowrd is "sample"

2.Create "sample_db" database and schema with owner "sample"

3.Run the following Script

(
CREATE TABLE IF NOT EXISTS sample_db.student
(
    id integer NOT NULL,
    
    name character varying(20) NOT NULL,
    
    age integer NOT NULL, 
    
    address character varying(50),   
    
    "phoneNo" character varying(20), 
    
    phone_no character varying(255),
    
    CONSTRAINT student_pkey PRIMARY KEY (id)
);
)
## Project Architecture

![arc](https://github.com/AungKoLin828/spring_boot_and_angular/assets/61590535/3a7e7843-90e3-4bc0-95ad-e3dbcafc5565)

## API Endpoints

Implement RESTful endpoints to handle the following operations:

### Students management endpoints:

● POST /sample/api/student/add: Add a new student

● GET /sample/api/student/{id}: Retrieve details of a specific student by ID.

● GET /sample/api/student/list-all: Retrieve a list of all students.

● PUT /sample/api/student/update: Update an existing student's information.

● DELETE /sample/api/student/{id}: Remove a student

## Execution Results
![create](https://github.com/AungKoLin828/spring_boot_and_angular/assets/61590535/0aae5031-2f35-4938-8be0-01e1d4fab69a)
![create1](https://github.com/AungKoLin828/spring_boot_and_angular/assets/61590535/3d695fb4-d91e-418b-8522-2f8f2f83a656)
![List](https://github.com/AungKoLin828/spring_boot_and_angular/assets/61590535/3cd1ba22-8b73-4db9-8af0-f04758249d96)
![edit](https://github.com/AungKoLin828/spring_boot_and_angular/assets/61590535/e62b4b05-57c5-435b-849a-46c72cb7887d)
![edit1](https://github.com/AungKoLin828/spring_boot_and_angular/assets/61590535/d4bb6ccf-0655-46d2-ab72-bc1e49842845)
![view](https://github.com/AungKoLin828/spring_boot_and_angular/assets/61590535/2d4d2990-a144-4ed2-8a77-78cefe2be496)
