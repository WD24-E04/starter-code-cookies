import express from "express";
import cors from "cors";
import "dotenv/config";

import connect from "./utils/database.js";
import checkToken from "./middleware/checkToken.js";
import usersRouter from "./routes/usersRouter.js";
import postsRouter from "./routes/postsRouter.js";

import {
  globalErrorHandler,
  routeNotFound,
} from "./middleware/errorHandlers.js";

await connect();
const { PORT = 5000 } = process.env;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
/* 
  - checkToken is not called here because this route only handles register and login.
  - Users cannot have a token before logging in, so requiring one would be unnecessary.
  - Token validation is only needed for protected routes after authentication.
*/

app.use("/posts", checkToken, postsRouter);
/* 
  - Calling checkToken before postsRouter to ensure the user has a valid token.
  - This validation is required for both creating a post and retrieving all posts.
  - Instead of calling checkToken separately for each controller inside postsRouter, we call it once beforehand.
  - This way, it runs for both operations efficiently.
*/

app.use(routeNotFound);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(
    `🚀 Server is up and running!\n` +
      `🌐 Listening on http://localhost:${PORT}\n` +
      `📅 Started at: ${new Date().toLocaleString()}\n`
  );
});
