
select * from estados e, cidades c
where e.id = c.estado_id;

select
c.nome as Cidade,
e.nome as Estado,
regiao as regiao
from estados `estados`
inner join cidades c on e.id = c.estado_id