docker build -t urban_farms-image .

docker tag urban_farms-image registry.heroku.com/urban_farms/web


docker push registry.heroku.com/urban_farms/web

heroku container:release web -a urban_farms