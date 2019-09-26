FROM python:3.5
RUN apt-get -q -y update && apt-get -q -y install build-essential libigraph-dev openssl
COPY source/requirements/ /code/web/requirements/
RUN pip install -r /code/web/requirements/development.txt
COPY tos/ /code/tos
RUN pip install /code/tos
COPY source/ /code/web
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
