TCP transmission control protocol
UDP user datagram protocol

A B
1,2,3 1,2,3 tcp
1,2,3 3,1 (2 lost) udp

packet

三次握手，四次挥手

ip/tcp

http request method:
GET

HTTP
0.9 GET
1.0 (headers 头文件)
1.1 (persistent connection 持久连接)
2 (server push 服务器推送)
3 (UDP -> QUIC)

https
(s tls transport layer security)

url
uniform resource locator

localhost:3000
127.0.0.1

DNS

https -> 443
http -> 80

query params
query parameters
数据筛选

anchor point
锚点

status code

HTTP Methods:
GET 获取 -> Read
POST 添加 -> Create
PUT 更新 （完整替换） -> Update
DELETE 删除 -> Delete
PATCH 更新 （部分更新）

CRUD - 增删改查

x-custom
User-Agent
user-agent

serialize 序列化
deserialize 反序列化

web service -> public web api

Restful api 设计规则

1. versioning
   /books/xxxx/v1
   /v1/books
   /v2/books

/api/v1/books
api.example.com/v1/books

2. url 尽量使用名词，不要使用动词，名词尽量是复数
   GET /v1/books
   POST /v1/books

xxxxxxx
GET /v1/getBooks
POST /v1/addBooks
GET /v1/addBooks

POST /v1/login

3. 保证 GET Method 不会对资源进行修改

posts resource
{
id: xxxx,
comments: [
{},{}
]
} 4. url 推荐使用嵌套结构
GET /posts/:id/comments (/posts/abc124/comments)
GET /posts/{id}/comments

5. 注意返回的大小
   对返回的数据做分页
   books
   10000 本书
   GET /v1/books -> 10000 个数据 （网络资源，页面渲染）

GET /v1/books?page=2&pageSize=10

6. 使用正确的 status code 来表示请求结果的状态

7. 返回可读的错误信息（文本信息）
   {"error": "invalid password"}
   {"error": 10001}

A, B
A -> a
B -> b

stateless
B -> b
A -> a

stateful
B -> error
A -> a

POST http://example.com/books

sequence diagram
时序图

monolith
