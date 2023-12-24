create next project
install docker
create the docker-compose.yml file for postgres sql
to create the database container: docker compose up jithindev-db -d
to remove the database container:docker compose rm jithindev-db -s -f -v


install prisma as developer dependency 
instll @prisma/client 
to start with prisma : npx prisma init - to intialise prisma configrations
connec and migrate to database: npx prisma migrate dev
browse the database in localhose : npx prisma studio
to generate the interfaces of the model: npx prisma genarate (automatically triggered when executing command npx prisma migrate dev)