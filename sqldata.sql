CREATE TABLE IF NOT EXISTS servers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    IPAddress VARCHAR(255) NOT NULL UNIQUE,
    Environment VARCHAR(255) NOT NULL
);

INSERT INTO servers (Name, IPAddress, Environment)
VALUES 
  ('Server1', '192.168.1.100', 'Production'),
  ('Server2', '192.168.1.101', 'Development'),
  ('Server3', '192.168.1.102', 'Testing');
