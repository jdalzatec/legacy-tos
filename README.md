# Legacy ToS repository

In order to run you need:

```bash
docker-compose up --build
```

While this is running, you need to run the following to init the database and
such,

```bahs
docker exec web bash
# This enters a bash inside the web service environment inside it:
python manage.py migrate
python manage.py createsuperuser
```

## Gotchas

- This repo is not intended for further development
