import express from "express";
import multer from "multer";
import { storage } from "./multerConfig";

const upload = multer({ storage: storage });
const app = express();



//endpoint post de envio de arquivo
app.post("/product-shopper", upload.single("envio de  arquivo"), (req, res) => {
  return res.json(req.file?.filename);
});

app.listen(3000);
