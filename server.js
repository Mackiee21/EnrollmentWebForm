const express = require("express")
const mssql = require("mssql")
const cors = require("cors")
const path = require("path")
const multer = require("multer")
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
const upload = multer()
//arrangement matters ata mak 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


// app.use(express.static(path.join(__dirname, "client", "dist")));

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

app.post("/addStudent", upload.none(), async (req, res) => {
    const { IDNumber, Firstname, MiddleName, Lastname, ImageUrl, Course, Year, Remarks } = req.body;
    try {
        if(!CheckDuplicate){
            const pool = await mssql.connect();
            const sql = `INSERT INTO Students 
                        (StudentIDNumber, StudentFName, StudentLName, StudentMName, StudentCourse, StudentYr, StudentRemarks, StudentStatus, ImageUrl)
                        VALUES('${IDNumber}', '${Firstname}', '${Lastname}', '${MiddleName}', '${Course}', '${Year}', '${Remarks}', 'AC', '${ImageUrl}')`;
            const response = await pool.request().query(sql)
            console.log('response', response)          
                 res.send({success: true })    
        }else{``
            res.send({duplicate: true})
        }
           
    } catch (error) {
        console.log(error)
        res.send({success: false, error})
    }
})

async function CheckDuplicate(IDNumber){
    const pool = mssql.connect();
    const sql = `SELECT * FROM Students WHERE StudentIDNumber = ${IDNumber}`;
    const response = await pool.request().query(sql);
    console.log(response)
    return response.recordset.length > 0 ? true : false
}
// app.get("*", (_, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"))
//   });
const port = process.env.PORT || 3000
connectDb().then(() => {
    app.listen(port, () => {
        console.log("server is up and running")
    })
})