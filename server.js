const express = require("express")
const mssql = require("mssql")
const cors = require("cors")

const connectionString = 'Server=tcp:enrollmentwebformdbserver.database.windows.net,1433;Initial Catalog=PandacDB;Persist Security Info=False;User ID=MackieeAdmin;Password=Pandac_21Admin;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;'
const connectDb = async () => {
    try {
       await mssql.connect(connectionString)
       console.log("connected and running")
    } catch (error) {
        console.log("error connecting to the database " + error)
    }
}
const app = express()

app.use(cors())


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
connectDb().then(() => {
    app.listen(3000, () => {
        console.log("server is up and running")
    })
})