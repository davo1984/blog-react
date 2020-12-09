CREATE TABLE IF NOT EXISTS students (
    ID SMALLINT AUTO_INCREMENT PRIMARY KEY,
    studentFirstname VARCHAR(25),
    studentLastname VARCHAR(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS pets (
    petId SMALLINT AUTO_INCREMENT PRIMARY KEY,
    petName varchar(25) NOT NULL,
    type varchar(25),
    studentID SMALLINT NOT NULL,
    FOREIGN KEY (studentID)
        REFERENCES students (ID)
        ON UPDATE CASCADE
        ON DELETE CASCADE
    )

    CREATE TABLE IF NOT EXISTS classes (
    classID SMALLINT AUTO_INCREMENT PRIMARY KEY,
    className VARCHAR(25),
    shortName VARCHAR(25),
    FOREIGN KEY (classID)
    	REFERENCES students(ID)
);
    
CREATE TABLE student_classes (
	studentID SMALLINT,
    classID SMALLINT,
    FOREIGN KEY studentID REFERENCES students(ID),
    FOREIGN KEY classID REFERENCES classes(classID)
);