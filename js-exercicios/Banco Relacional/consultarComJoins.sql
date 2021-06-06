select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

select * from prefeitos;
select * from cidades;

select * from cidades c left join prefeitos p on c.id=p.cidade_id;
select * from cidades c right join prefeitos p on c.id=p.cidade_id;

select * from cidades c left join prefeitos p on c.id=p.cidade_id
UNION
select * from cidades c right join prefeitos p on c.id=p.cidade_id;