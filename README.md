# Gama Academy - Mente Sã

Projeto individual da Gama Academy

## Para Executar

A maneira mais simples de executar o projeto é por meio do `docker compose` e pode ser feito da seguinte forma
```bash
$ docker-compose up
# ou
$ docker comose up
```

Caso apresente uma falha ao rodar o `docker compose` pode ser que esteja faltando o volume da aplicação, para ajusta podemos fazer o seguinte:

```bash
$ docker volume create postgres_mente_sa
```

E depois rodar o `up` novamente.

Esse comando já ira configurar o ambiente de desenvolvimento

## Backend

Roda na porta `3333`

