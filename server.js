const express = require("express")
const mssql = require("mssql")
const cors = require("cors")
const path = require("path")
const { json } = require("express")
const { prototype } = require("events")

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
app.use(express.urlencoded())


app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("/student", async (req, res) => {
    try {
        const pool = await mssql.connect();
        const sql = "SELECT * FROM Students";
        const students = await pool.request().query(sql);
        res.send(students.recordset);
    } catch (error) {
        console.log("error " + error)
    }
})

app.post("/addStudent",  async (req, res) => {
    console.log(req.body)
    const { IDNumber, Firstname, MiddleName, Lastname, ImageUrl, Course, Year, Remarks } = req.body;
    try {
        if(await CheckDuplicate(IDNumber) === false){
            const pool = await mssql.connect();
            const sql = `INSERT INTO Students 
                        (StudentIDNumber, StudentFName, StudentLName, StudentMName, StudentCourse, StudentYr, StudentRemarks, StudentStatus, ImageUrl)
                        VALUES('${IDNumber}', '${Firstname}', '${Lastname}', '${MiddleName}', '${Course}', '${Year}', '${Remarks}', 'AC', '${ImageUrl}')`;
            const response = await pool.request().query(sql)
            console.log('response', response)          
                 res.send({success: true, redirectTo: '/students' })    
        }else{
            //means ID number already exists in the database
            res.send({duplicate: true})
        }
           
    } catch (error) {
        console.log(error)
        res.send({success: false, error})
    }
})

async function CheckDuplicate(IDNumber){
    const pool = await mssql.connect();
    const sql = `SELECT * FROM Students WHERE StudentIDNumber = ${IDNumber}`;
    const response = await pool.request().query(sql);
    // s
    return response.recordset.length > 0 ? true : false
}
app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
  });
const port = process.env.PORT || 3000
connectDb().then(() => {
    app.listen(port, () => {
        console.log("server is up and running")
    })
})