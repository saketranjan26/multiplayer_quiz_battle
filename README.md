

# Realtime Multiplayer Quiz Battle 
 A web app where you can host and join quizzes in real-time!   
 The host can set questions, make them live for participants to join, and then start the battle. Participants compete to top the leaderboard.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:**  Next.js, next-auth
- **Real-time Communication (WS + pub/sub):** Pusher.js
- **Database:** PostgresSQL with prisma as ORM
- **Hosting:** Vercel(not hosted yet)

## Setup Locally

**Step 1:** Clone the repository and open it in your IDE.  
**Step 2:** Install all dependencies by running the following command. Make sure you are in the root folder of the project in your terminal
```bash
npm install
```
**Step 3:** Initialize a Postgres instance in a Docker container. And generate prisma client for the prisma schema. By the time your `.env` file should look like this
```.env
DATABASE_URL = "postgresql://postgres:mysecretpassword@localhost:7321/postgres" # Your database URL
JWT_SECRET = "your_jwt_secret" # Your JWT secret
NEXTAUTH_URL = "http://localhost:3000" # Ensure no other project is running on this port
NEXTAUTH_SECRET = "your_nextauth_secret" # Your NextAuth secret
```
**Step 4:** Get your Pusher API from [here](https://pusher.com/channels/)  
**Step 5:** Update your `.env` file with the API keys. Your final file should look like this
```.env
DATABASE_URL = "postgresql://postgres:mysecretpassword@localhost:7321/postgres" # Your database URL
JWT_SECRET = "your_jwt_secret" # Your JWT secret
NEXTAUTH_URL = "http://localhost:3000" # Ensure no other project is running on this port
NEXTAUTH_SECRET = "your_nextauth_secret" # Your NextAuth secret
PUSHER_APP_ID = "your_pusher_app_id"
NEXT_PUBLIC_PUSHER_APP_KEY = "your_pusher_app_key"
PUSHER_APP_SECRET = "your_pusher_app_secret"
PUSHER_APP_CLUSTER = "your_pusher_app_cluster"
```
**Step 6:** Run below command at root folder of project to start the project in dev mode.
```bash
npm run dev
```
Open the URL which you mentioned in the `.env` file. For eg "http://localhost:3000".   
Congrats! you are done.
