FROM ruby:2.6.6

ENV APP /usr/src/app

# netcat is for nc command
RUN apt-get update && apt-get install -y netcat
RUN apt-get install -y vim
RUN gem install bundler

RUN mkdir $APP

WORKDIR $APP
COPY Gemfile $APP/Gemfile
RUN bundle install

COPY . $APP/

CMD ["./bin/server-dev"]