# margo-backend

## Models

### Cables

|  Attribute  |  Type   |
|-------------|---------|
| tag         | string  |
| conduit_id  | integer |


### Conduits

| Attribute | Type   |
|-----------|--------|
| tag       | string |
| size      | float  |
| to        | string |
| from      | string |

### Projects

| Attribute |  Type   |
|-----------|---------|
| name      | string  |
| user_id   | integer |

### User

|    Attribute    |  Type   |
|-----------------|---------|
| username        | string  |
| password_digest | integer |
