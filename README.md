# rs-clone-back-end
Api for RS-Nonograms

## Setup and Running


## Usage

- **Nonograms**
    - [Get Nonograms](#get-nonograms)

**Get Nonograms**
----
Returns json data about nonograms.

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
          "height": 11,
          "width": 9,
          "title": {
            "en": "Martini",
            "ru": "Мартини",
            "de": "Martini"
          },
          "state": "initial",
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
          "currentUserDesicion": [
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null]
          ],
          "currentTime": 0,
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
          ]
        }
      ]
    ```
    If the user is not logged in, the following properties are null: ```currentUserDesicion, currentTime, state```
    
    **Headers:**

      None

 
* **Error Response:**

    None

* **Notes:**

    None

</details>

