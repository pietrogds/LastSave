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

CREATE TABLE resultado_quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	total_perguntas INT,
	dt_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('Teste', 'LastSave', 'teste@lastsave.com', '123456');

SELECT * FROM usuario;
