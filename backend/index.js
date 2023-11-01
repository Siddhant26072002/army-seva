const connectToAtlas = require("./db")
const express = require('express')
const cors = require('cors')
const port = 5000
const app = express()
connectToAtlas();

// app.use(cors());


app.use(express.json());


app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/blogs", require("./routes/blog"));
app.use("/api/jobs", require("./routes/jobs"));
app.use('/api/pay', require("./routes/stripe"));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
