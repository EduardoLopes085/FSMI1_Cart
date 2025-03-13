import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;



app.listen(PORT, () => {
    console.log(`O servidor está rodando no link -> http://localhost:${PORT}`);
});


