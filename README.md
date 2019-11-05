# Legacy ToS repository

In order to run you need:

```bash
docker-compose up --build
```

While this is running, you need to run the following (in the same folder) to init the database and
such,

```bash
docker-compose exec web bash
# This enters a bash inside the web service environment inside it:
python manage.py migrate
python manage.py createsuperuser
```

## Gotchas

- This repo is not intended for further development
