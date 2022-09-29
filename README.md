# 起動時に
getInitialProps など SSR 時に Rails API を叩くと ECONNREFUSED のエラーが出るので、ここでは ngrok で発行した URL を Rails アプリに割り当てることで対処します。
`ngrok http 8080`

backend/.env


# 次回はここから
https://zenn.dev/kei178/articles/43172ba33eece4#rails%3A-%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90

# Sequel Ace
- host:localhost
- username:root
- pw:password
- port:3307