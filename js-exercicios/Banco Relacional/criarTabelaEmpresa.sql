create table if not exists empresas(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  cnpj int unsigned,
  PRIMARY KEY(id),
  UNIQUE KEY (cnpj)
);

-- cidades_empresas (tabela relacional)

create table if not exists empresas_unidades(
  empresa_id INT UNSIGNED NOT NULL,
  cidade_id INT UNSIGNED NOT NULL,
  sede TINYINT(1) NOT NULL,
  PRIMARY KEY (empresa_id, cidade_id)
);