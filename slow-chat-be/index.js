const express = require("express");
const app = express();
const port = 4000;

app.get("/messages", (req, res) => {
	res.send( [
        {
          id: 1,
          author: { id: 1, name: "Obi-Wan Kenobi" },
          message: "It's over Anakin, I have the high ground.",
        },
        {
          id: 2,
          author: { id: 2, name: "Anakin Skywalker" },
          message: "You underestimate my power!",
        },
      ]);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
