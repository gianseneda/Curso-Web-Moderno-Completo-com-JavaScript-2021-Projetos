SELECT * from estados

select nome as 'Nome do Estado', sigla from estados
where regiao = 'sul'

select nome, regiao from estados
where populacao >= 10
order by populacao desc