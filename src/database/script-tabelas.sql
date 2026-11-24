-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE lastsave;

USE lastsave;

-- Usuários do site (cadastro e login)
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	sobrenome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	dt_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Resultado de cada vez que o usuário termina o quiz (dados da dashboard)
CREATE TABLE resultado_quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	total_perguntas INT,
	dt_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- Usuário de teste (opcional)
INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('Teste', 'LastSave', 'teste@lastsave.com', '123456');

SELECT * FROM usuario;
