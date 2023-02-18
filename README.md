# crowd-funder-api
a kickstarter knockoff

## local setup
### setup .env files
create a new `.env` file in each directory & copy whatevers inside `.env.dev` into there

### run docker-compose
run this following command inside each service:
```console
docker compose -f docker-compose.yml up
```
it will set up docker containers (db, pgadamin etc)

### run commands
```console
npm run start 
```
starts the service

```console
npm run seed 
```
seeds the db

```console
npm run tests 
```
runs tests 