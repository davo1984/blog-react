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