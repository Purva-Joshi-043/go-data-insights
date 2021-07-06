## `Go Data Insights : `

1. This service deals with the user authentication with all the input validations in the field of Firstname, Lastname, email, password.
2. This service is fueled by ReactJS, Flask, MongoDB.

## `UI : `

1. This service is built using the [material-ui framework](https://material-ui.com/).
2. I have amalgamated vector graphics for better visuals.
3. This service is compatible accross different devices.

## `Installation`

> Requires python and node. Install python using [python](https://www.python.org/downloads/)

1. cd to the root directory where requirements.txt is located.
2. run: pip install -r requirements.txt
3. cd client && npm install

## `Development`

1. In the client directory: `npm start`
2. In a separate terminal, in the root directory: `python app.py`
3. Go to http://localhost:3000/

## `Production`

1. In the client directory: `npm run build`
2. After the build finishes:
   - In the root directory: python app.py
3. Go to http://127.0.0.1:5000/ or your domain.
