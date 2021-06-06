INSERT INTO CIDADES(nome,area, estado_id)
values('Campinas', 795, 44)

INSERT INTO CIDADES(nome,area, estado_id)
values('Niteroi', 795, 40)

select * from `estados`

select * from cidades

delete from `cidades` 
where id = 1

delete from `cidades` 
where id = 2

INSERT INTO CIDADES(nome,area, estado_id)
values(
  'Caruaru', 
  920.6, 
  (select ID FROM estados where sigla = 'PE'));

  INSERT INTO CIDADES(nome,area, estado_id)
values(
  'Juazeiro do Norte', 
  248.2, 
  (select ID FROM estados where sigla = 'CE'));


