import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      res.status(400).send({
        msg: "all fileds are required : title,author,publishedYear",
      });
    } else {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
      };
      const book = await Book.create(newBook);
      return res.status(201).send(book);
    }
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.status(200).json(book);
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        msg: "all fileds are required : title,author,publishedYear",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({
        msg: "Book not found",
      });
    }
    return res.status(200).send({ message: "Book updated successfully" });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({
        msg: "Book not found",
      });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

export default router;
