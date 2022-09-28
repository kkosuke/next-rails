# 起動時に
getInitialProps など SSR 時に Rails API を叩くと ECONNREFUSED のエラーが出るので、ここでは ngrok で発行した URL を Rails アプリに割り当てることで対処します。
`ngrok http 8080`

backend/.env