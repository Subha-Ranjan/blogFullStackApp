import mysql from "mysql"

export const db = mysql.createConnection(
    {
      host:"localhost",
      user:"root",
      password:"9851988449@Sb",
      database:"blog" //create data base named "blog"
    }
)
