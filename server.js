const express = require("express")
const mssql = require("mssql")
const cors = require("cors")
const path = require("path")

const conneString = process.env.NODE_ENV === "prod" ? process.env.conneString : require('./devs/dev').serverUrl
const connectionString = conneString //completely unnecesary mak hehe
const connectDb = async () => {
    try {
       await mssql.connect(connectionString)
       console.log("connected and running")
    } catch (error) {
        console.log("error connecting to the database " + error)
    }
}
const app = express()
//arrangement matters ata mak 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("/student", async (req, res) => {
    try {
        console.log("Hiii")
        const pool = await mssql.connect();
        const sql = "SELECT * FROM Students";
        const students = await pool.request().query(sql);
        res.send(students.recordset);
    } catch (error) {
        console.log("error " + error)
    }
})
// app.get("*", (_, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"))
//   });
const port = process.env.PORT || 3000
connectDb().then(() => {
    app.listen(port, () => {
        console.log("server is up and running")
    })
})