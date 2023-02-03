# rs-clone-back-end
Api for RS-Nonograms

## Setup and Running


## Usage

- **Nonogram**
    - [Get Nonogram](#get-nonogram)

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
        "data": {
          "nonogram": {
            "id": "123456789abc",
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
            ]
          }
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