# rs-clone-back-end
Api for RS-Nonograms

## Setup and Running

- Use `node 18`.
- You can send requests to the address: `https://rs-clone-backend-1hqs.onrender.com`.

## Usage

- **Nonogram**
    - [Get Nonograms](#get-nonograms)
    - [Get Nonogram](#get-nonogram)
- **Users**
    - [Get User's game](#get-users-game)

**Get Nonograms**
----
Returns json data about all nonograms.

<details>

* **URL**

    /nonograms

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "id": "123456789abc",
          "nonogram": {
            "height": 11,
            "width": 9,
            "title": {
                "en": "Martini",
                "ru": "Мартини",
                "de": "Martini"
            },
            "colorMapping": {
                "1": "#000000",
                "2": "#c91414"
            },
            "goal": [
                [1,1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,1],
                [0,1,2,2,2,2,2,1,0],
                [0,0,1,2,2,2,1,0,0],
                [0,0,0,1,2,1,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,1,1,1,1,1,0,0]
            ],
            "rows": [
                [ {   "hint": 9, "color": 1  } ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 5, "color": 2  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 3, "color": 2  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 2  },
                    {   "hint": 1, "color": 1  },
                ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 5, "color": 1  } ],
            ],
            "columns": [
                [ {   "hint": 2, "color": 1  } ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 2  },
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 2, "color": 2  },
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 2  },
                    {   "hint": 6, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 2, "color": 2  },
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 2  },
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [ {   "hint": 2, "color": 1  } ],
            ],
            "difficulty" : 1
          }
        }
      ]
    ```
 
* **Error Response:**

    * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```{}```

* **Notes:**

    None

</details>

**Get Nonogram**
----
Returns json data about nonogram.

<details>

* **URL**

    /nonograms/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[string]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
          "id": "123456789abc",
          "nonogram": {
            "height": 11,
            "width": 9,
            "title": {
                "en": "Martini",
                "ru": "Мартини",
                "de": "Martini"
            },
            "colorMapping": {
                "1": "#000000",
                "2": "#c91414"
            },
            "goal": [
                [1,1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,1],
                [0,1,2,2,2,2,2,1,0],
                [0,0,1,2,2,2,1,0,0],
                [0,0,0,1,2,1,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,0,0,1,0,0,0,0],
                [0,0,1,1,1,1,1,0,0]
            ],
            "rows": [
                [ {   "hint": 9, "color": 1  } ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 5, "color": 2  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 3, "color": 2  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 2  },
                    {   "hint": 1, "color": 1  },
                ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 1, "color": 1  } ],
                [ {   "hint": 5, "color": 1  } ],
            ],
            "columns": [
                [ {   "hint": 2, "color": 1  } ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 2  },
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 2, "color": 2  },
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 2  },
                    {   "hint": 6, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 2, "color": 2  },
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 2  },
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [
                    {   "hint": 1, "color": 1  },
                    {   "hint": 1, "color": 1  },
                ],
                [ {   "hint": 2, "color": 1  } ],
            ],
            "difficulty" : 1
          }
        }
    ```
 
* **Error Response:**

    * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```{}```

* **Notes:**

    None

</details>

**Get User's game**
----
Returns json data about user's saved game.

<details>

* **URL**

    /users-games

* **Method:**

    `GET`

* **Headers:**

    `'token': 'string'`

*  **URL Params**
 
    None

* **Query Params**

    None

* **Data Params**

    ```
        {
            id: string
        }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "data": {
          "currentGame": {
            "state": "started",
            "currentUserSolution": [
                [null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null],
                [0,1,2,2,2,2,2,1,0],
                [null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null]
            ],
            "currentTime": 200,
            "currentUserRows": [
                [ {   "isCrossedOut": false  } ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [
                    {   "isCrossedOut": true  },
                    {   "isCrossedOut": true  },
                    {   "isCrossedOut": true  },
                ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [ {   "isCrossedOut": false  } ],
                [ {   "isCrossedOut": false  } ],
                [ {   "isCrossedOut": false  } ],
                [ {   "isCrossedOut": false  } ],
                [ {   "isCrossedOut": false  } ],
                [ {   "isCrossedOut": false  } ],
            ],
            "currentUserColumns": [
                [ {   "isCrossedOut": false  } ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [
                    {   "isCrossedOut": false  },
                    {   "isCrossedOut": false  },
                ],
                [ {   "isCrossedOut": false  } ],
            ]
          }
        }
      }
    ```
        
    **Headers:**

      None

 
* **Error Response:**

    * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```{}```

* **Notes:**

    ```'state': 'started' | 'finished' | 'initial'```

    ```currentTime``` - time in ms

</details>

