import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM JAHONG!");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
