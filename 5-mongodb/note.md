SQL, non-SQL

关系型，非关系型

SQL
structured query language

MySQL
Postgres QL
SQLite

no SQL
not only SQL

document-oriented -> mongodb, dynamodb, firebase
key-value -> redis
graph-oriented -> neo4j
column-family -> cassandra

humongous
mongo

collection
[
{
_id: ObjectId('xxx1'),
name: 'yyy'
},
{
_id: ObjectId('xxx2'),
username: 'yyy'
}
]

BSON -> Binary JSON

nested document

operator
update operator
query operator
projection operator

Student Course
S1,S2 C1,C2

1 - 1
S1 -> C1
S2 -> C2
C1 -> S1
C2 -> S2

1 - M
S1 -> C1
S2 -> C1
C1 -> S1,S2
C2 ->

M - N
S1 -> C1, C2
S2 -> C1, C2
C1 -> S1, S2
C2 -> S1, S2

Student collection
[
{
\_id: 's1',
name: 'mason',
<!-- addresses: ['a1','a2'], -->
addresses: [
{
_id: 'a1',
city: 'brisbane',
},
{
_id: 'a2',
city: sydney,
}
]
},
{
\_id: 's2',
name: 'james',
addresses: [
{
_id: 'a1',
city: 'brisbane',
postcode: 4000,
},
{
_id: 'a2',
city: sydney,
postcode: 2000,
}
]
},
]

address collection
[
{
_id: 'a1',
city: 'brisbane',
postcode: 4000,
},
{
_id: 'a2',
city: sydney,
postcode: 2000,
}
]

trade-offs
