INSERT INTO empresas
(nome, cnpj)
values
('Bradesco', 95694186000132),
('Vale', 12782901000102),
('Cielo', 27382923000183);

ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

select * from empresas;
select * from cidades;

desc empresas;

insert into empresas_unidades
(empresa_id, cidade_id, sede)
values
(1,4,1),
(1,3,0),
(2,4,0),
(2,3,1);