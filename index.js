const express = require("express")
const path = require("path")

const vjRoutes = require('./routes/cartas')

const sequelize = require('./utils/database')

const app = express();

//Middleware
app.use(express.static(path.join(__dirname,'public')))
//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/examen2", (req, res)=>{
  console.log("Pagina con conexion")
})

app.use("/cartas",vjRoutes);

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
            console.log("Aplicación web en línea en el puerto 8080")
        })        
    })
    .catch(err=>console.log(err))