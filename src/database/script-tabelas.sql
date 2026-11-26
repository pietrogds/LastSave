CREATE DATABASE lastsave;

USE lastsave;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	sobrenome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	dt_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

Para o Linux :
CREATE TABLE usuario (id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(50), sobrenome VARCHAR(50), email VARCHAR(50), senha VARCHAR(50), dt_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP );

CREATE TABLE resultado_quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	acertos_historia INT,
	acertos_criador INT,
	total_perguntas INT,
	dt_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

Para o Linux :
CREATE TABLE resultado_quiz (id INT PRIMARY KEY AUTO_INCREMENT, acertos INT, acertos_historia INT, acertos_criador INT, total_perguntas INT, dt_resposta DATETIME DEFAULT CURRENT_TIMESTAMP, fk_usuario INT, FOREIGN KEY (fk_usuario) REFERENCES usuario(id) );


INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('Teste', 'LastSave', 'teste@lastsave.com', '123456');

SELECT * FROM usuario;

Se a tabela resultado_quiz já existia antes, rode só este comando para adicionar as colunas novas:
ALTER TABLE resultado_quiz ADD COLUMN acertos_historia INT AFTER acertos, ADD COLUMN acertos_criador INT AFTER acertos_historia;

SELECT * FROM resultado_quiz;
