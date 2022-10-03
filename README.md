# 起動方法
##  手順1
```
git clone git@github.com:kkosuke/next-rails.git
$ cd next-rails
next-rails$ cd frontend
next-rails/frontend$ yarn
next-rails/frontend$ cd ../
next-rails$
```

## 手順2 ngrok http 8080
getInitialProps など SSR 時に Rails API を叩くと
ECONNREFUSED のエラーが出るので、ここでは ngrok で発行した URL を Rails アプリに割り当てることで対処します。

そのため、立ち上げるときに、
```
next-rails$ ngrok http 8080
```
を行い、生成された `http:// 以降の 値（例：a620-39-110-206-184.jp.ngrok.io）` を、 `backend/.env` に、

```
BACKEND_HOST='a620-39-110-206-184.jp.ngrok.io'
```
のように、記載してください。

## 手順3
その後、
```
next-rails$ docker compose up
```

# Sequel Ace
- host:localhost
- username:root
- pw:password
- port:3307

# VS code
- frontend:/usr/src/app
- backend:/usr/src/app

# storybook
```
$ cd frontend
frontend$ yarn storybook
```

# TODO
## 次回はここから
https://zenn.dev/kei178/articles/43172ba33eece4#rails%3A-%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90
