# Defend the Jedi Temple Backend

This app is hosted on Heroku, using ClearDB as a SQL Cloud database.

API Endpoint - `https://defend-jedi-temple-be.herokuapp.com`

## Endpoints

> GET /leaderboard

- fetches the top 10 scores, ordered by DESC

> POST /leaderboard

- creates a new row in DB with the payload name and score

Payload sample:

```
{
    name: 'Peter K',
    score: 500
}
```

## Running the app locally

Runs on port 3000.

This requires making a connection to MySQL in local environment. Please initialize a new database and table with DB name being: `defendjeditemple` and table name `leaderboard`.

Example for creating leaderboard table:

```
CREATE TABLE IF NOT EXISTS `leaderboard` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    score int(255)
    );
```

Table SCHEMA is:

```
id: PRIMARY KEY
name: VARCHAR(255)
score: INT(255)
```

### Tech stack

- Node.js
- Express
- CORS
- MySQL
- Heroku
- ClearDB
