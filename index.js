import 'dotenv/config';
import app from "./app.js";

const PORT = process.env.APP_PORT || 8000;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});