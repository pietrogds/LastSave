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
	pontos INT,
	total_perguntas INT,
	dt_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

Para o Linux :
CREATE TABLE resultado_quiz (id INT PRIMARY KEY AUTO_INCREMENT, acertos INT, acertos_historia INT, acertos_criador INT, pontos INT, total_perguntas INT, dt_resposta DATETIME DEFAULT CURRENT_TIMESTAMP, fk_usuario INT, FOREIGN KEY (fk_usuario) REFERENCES usuario(id) );

-- Resultados por dificuldade: cada tentativa do quiz tem um resultado de cada dificuldade (1:1)

CREATE TABLE resultado_facil (
	id INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	total_questoes INT,
	pontos INT,
	fk_resultado INT UNIQUE,
	FOREIGN KEY (fk_resultado) REFERENCES resultado_quiz(id)
);

Para o Linux :
CREATE TABLE resultado_facil (id INT PRIMARY KEY AUTO_INCREMENT, acertos INT, total_questoes INT, pontos INT, fk_resultado INT UNIQUE, FOREIGN KEY (fk_resultado) REFERENCES resultado_quiz(id) );

CREATE TABLE resultado_media (
	id INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	total_questoes INT,
	pontos INT,
	fk_resultado INT UNIQUE,
	FOREIGN KEY (fk_resultado) REFERENCES resultado_quiz(id)
);

Para o Linux :
CREATE TABLE resultado_media (id INT PRIMARY KEY AUTO_INCREMENT, acertos INT, total_questoes INT, pontos INT, fk_resultado INT UNIQUE, FOREIGN KEY (fk_resultado) REFERENCES resultado_quiz(id) );

CREATE TABLE resultado_dificil (
	id INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	total_questoes INT,
	pontos INT,
	fk_resultado INT UNIQUE,
	FOREIGN KEY (fk_resultado) REFERENCES resultado_quiz(id)
);

Para o Linux :
CREATE TABLE resultado_dificil (id INT PRIMARY KEY AUTO_INCREMENT, acertos INT, total_questoes INT, pontos INT, fk_resultado INT UNIQUE, FOREIGN KEY (fk_resultado) REFERENCES resultado_quiz(id) );

-- Sorteios de curiosidade: um usuário pode sortear várias curiosidades (1:n)

CREATE TABLE sorteio_curiosidade (
	id INT PRIMARY KEY AUTO_INCREMENT,
	numero_curiosidade INT,
	dt_sorteio DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

Para o Linux :
CREATE TABLE sorteio_curiosidade (id INT PRIMARY KEY AUTO_INCREMENT, numero_curiosidade INT, dt_sorteio DATETIME DEFAULT CURRENT_TIMESTAMP, fk_usuario INT, FOREIGN KEY (fk_usuario) REFERENCES usuario(id) );


INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('Teste', 'LastSave', 'teste@lastsave.com', '123456');

SELECT * FROM usuario;

Se a tabela resultado_quiz já existia antes, rode só este comando para adicionar as colunas novas:
ALTER TABLE resultado_quiz ADD COLUMN acertos_historia INT AFTER acertos, ADD COLUMN acertos_criador INT AFTER acertos_historia;

Se as colunas acima já existem, rode só este para adicionar a pontuação:
ALTER TABLE resultado_quiz ADD COLUMN pontos INT AFTER acertos_criador;

SELECT * FROM resultado_quiz;
SELECT * FROM resultado_facil;
SELECT * FROM resultado_media;
SELECT * FROM resultado_dificil;
SELECT * FROM sorteio_curiosidade;
