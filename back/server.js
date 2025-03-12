const express = require("express");
const app = express();

// const { PrismaClient } = require("@prisma/client"); 
// const prisma = new PrismaClient(); 

// const cors = require("cors"); 
// app.use(cors());

const PORT = 3000; 
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("servido tá fufando")
})


app.get("/produtos", async (req, res) => {
    const produtos = await prisma.filme.findMany();
    res.json(produtos)
})

app.get("/produtos/:id", async (req, res) => {

    try {
        const id = parseInt(req.params.id);
        const produtos = await prisma.produtos.findUnique({ where: { id } })
        if (!produtos) return res.status(404).json({ error: "Produto não encontrado" })

        res.json(produtos);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao buscar o produto", error: error.message })

    }

})

app.post("/", async (req, res) => {
    try {
        const body = req.body;

        if (!body.nome || !body.preco || !body.quantidade || !body.categoria) {
            return res.status(400).json({
                message: "Todos os campos obrigatórios devem ser preenchidos."
            });
        }

        const newProduto = await prisma.produtos.create({ data: body })
        res.status(201).json(newProduto);

    } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar o produto" });

    }

})


app.put("/produtos/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const body = req.body;

        if (!body.nome || !body.preco || !body.quantidade || !body.categoria) {
            return res.status(400).json({
                message: "Todos os campos obrigatórios devem ser preenchidos."
            });
        }

        const updateProduto = await prisma.produtos.update({ data: body, where: { id } })

        res.status(200).json({ messsage: "Produto atualizado com sucesso" })

    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar o Produto" });

    }

})


app.delete("/produtos/:id", async (req, res) => {
    try {

        const id = parseInt(req.params.id)
        const produtoExiste = await prisma.produtos.findUnique({ where: { id } })

        if (!produtoExiste) return res.status(400).json({ error: "Produto não encontrado" })

        await prisma.produtos.delete({ where: { id } });
        res.status(200).json({ message: "Produto excluido com sucesso" })

    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir o produto" });

    }
})







app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });