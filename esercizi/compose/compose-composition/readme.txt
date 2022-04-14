Per utilizzare l'app in locale:

docker-compose -f docker-compose.porte.yml docker-compose.infrastruttura.yml docker-compose.db-ui.yml up

Per utilizzare l'app su un server di test:

docker-compose -f docker-compose.infrastruttura.yml docker-compose.servizi.yml docker-compose.db-ui.yml

Per utilizzare l'app in produzione:

docker-compose -f docker-compose.infrastruttura.yml docker-compose.servizi.yml
