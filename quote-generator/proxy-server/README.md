# 說明
這是從[beat-cors-server](https://github.com/15Dkatz/beat-cors-server)複製過來改寫的，用於quote generator project的proxy server
## 使用
```
npm i
npm run start
```
啟動server，on ```http://localhost:3000/quotes/random```

## Bug
當回傳json有無法解析的東西(如:')，server會breakdown QAQ