### purple-array

###### _Repository for the purple-array team's work._

# WriteLight

WriteLight is a full-stack app that helps users learn new vocabulary through daily reflection and action. Each day, users receive a new word and are challenged to use it meaningfully in their lives. After using their word, they journal their experience by answering prompts like: How did you use today’s word? What gave you hope? What did you learn? How did you show kindness? The app fosters language growth, self-awareness, and positivity—one word at a time.

![WriteLight](https://raw.githubusercontent.com/freeCodeCamp-2025-Summer-Hackathon/purple-array/refs/heads/main/frontend/public/WriteLight.png)

![WriteLight-Dark-Theme](https://raw.githubusercontent.com/freeCodeCamp-2025-Summer-Hackathon/purple-array/refs/heads/main/frontend/public/WriteLightDark.png)

## Made With

## ![Node.js](https://nodejs.org/static/images/favicons/favicon.png) ![Express.js](https://expressjs.com/images/favicon.png) ![React.js](https://react.dev/favicon-32x32.png)

## Required Software Install

Node.js & Node Package Manager (npm)

1. Download and install Node.js (LTS v22) from the [official website](https://nodejs.org/en/download)

## Clone the Repository

```
git clone https://github.com/freeCodeCamp-2025-Summer-Hackathon/purple-array.git
cd purple-arrray
```

## MongoDB Setup

1.  Create an account on [MongoDB](https://www.mongodb.com/cloud/atlas/register)
2.  If you are creating an account for the first time, you will be taken to the “Deploy your cluster” page. Select the following options:

    - Free
    - Uncheck “preload sample data”
    - Name your cluster
    - Create deployment

3.  Create a database user – keep your username/password somewhere, just in case

    - Create Database User

4.  Click “Choose a connection method”

    - Click “Drivers”
      - Set “Driver” to “Node.js”
      - Copy the “connection string” below. Make sure it includes the password <br>
        **_THIS IS YOUR LAST CHANCE TO GRAB YOUR PASSWORD_**

5.  Click “Done”
6.  Click “Network Access” (left bar) and “+ADD IP ADDRESS” (green button)

    - “Allow Access From Anywhere”

## 🧪 Your Local Dev Environment Setup

1.  Make sure you have pulled the most recent version of the project’s `main` branch from GitHub.
    - switch to the main branch if you are not already on it, and then run `git pull`

```
 git switch main
 git pull
```

2. Change directories into the backend folder

```
cd backend
```

3. Create a “.env” file inside the **_backend_** folder (make sure it’s at the top level, and not nested in an additional folder).
4. Create the variable `MONGO_URI=` followed by the connection string you copied earlier; your Mongo Uniform Resource Indicator (URI), represented by the placeholder value in the brackets below.

```
MONGO_URI=<Your_Mongo_URI>
```

- **_Please note: you don't include any quotation marks or the angle brackets._**
- The string will look something like this:

```
mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<CLUSTER_NAME>.iva3yfn.mongodb.net/?retryWrites=true&w=majority$appName=<CLUSTER_NAME>
```

5. Additionally, you can add a name for the database by adding it to URI after the `iva3yfn.mongodb.net/` portion of the string, as shown below:

```
mongodb+srv://<your_username>:<your_password>@<cluster_name>.iva3yfn.mongodb.net/<ADD_DB_NAME_HERE>?retryWrites=true&w=majority$appName=<cluster_name>
```

6. Now add your PORT variable to the .env file and set it to `PORT=5001`

7. Now add the following variables to your .env as well:
   `NODE_ENV=development`

8. Lastly you'll need a JSON Web Token Secret key in your .env file as well. It will be in the following format `JWT_SECRET=<Secret_String>` where `<Secret_String>` is the appropriate JWT key. The JWT key just needs to be a unique, randomized alphanumeric `string`. We recommend that it be it at lest 64 characters. You can create a unique string [here](https://generate-random.org/encryption-key-generator) if you don't already have a preferred method.

**_Please ensure that you now have all of the following environment variables in your .env file, including the Node environment variable with value set to `development` as shown below._**

```
MONGO_URI=<Your_Mongo_URI>

PORT=5001

NODE_ENV=development

JWT_SECRET=<Secret_String>
```

## ✔️ Load your Database

The script to load your database is located directly in the backend directory and must be run from that directory.
To run the script please open a terminal window and run the following commands:

```
cd backend
node seed-database.js
```

## 🔧 Run the Backend

In a terminal window please run the following:

```
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

In another terminal window please also run:

```
cd frontend
npm install
npm run dev
```

### Contributors to this Repository

- [Mystel](https://github.com/Mystel)
- [Naomi](https://github.com/naomi-lgbt)
- [haednodik](https://github.com/haednodik)
- [Dustin Johnson](https://github.com/D-Johnson89)
- [Shelby](https://github.com/notsprinkles)
- [Victor Wong](https://github.com/VictorWong123)
- [Matthew](https://github.com/imattking)
- [Michael Liu](https://github.com/mrl588)
- [amandaw800](https://github.com/amandaw800)
- [Avigya Paudel](https://github.com/Avi161)
- [Marisa Vertz](https://github.com/MarisaVertz)
