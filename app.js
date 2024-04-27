const express = require("express");
const dbconnect = require("./config");
const modelUser = require("./userModel");
const app = express();

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const respuesta = await modelUser.create(body)
  res.send(respuesta);
})

router.get("/", async (req, res) => {
  const respuesta = await modelUser.find({});
  res.send(respuesta);
})

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await modelUser.findById(id);
  res.send(respuesta);
})

router.put("/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const respuesta = await modelUser.findOneAndUpdate({id: id}, body);
  res.send(respuesta);
})

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await modelUser.deleteOne({id: id});
  res.send(respuesta);
})

app.use(express.json());
app.use(router);
app.listen(3000, () => {
  console.log("El servidor esta en el puerto 3000");
});

dbconnect();
