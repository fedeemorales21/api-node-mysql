const express = require('express');
const router = express.Router();

const conn = require('../connection.js');

router.get('/projects', (req,res)=>{

    conn.query('SELECT * FROM projects', (error, rows, fields)=> {
        if (!error) {
            res.json(rows)
        } else {
            console.log(error)
        }    
    });
})

router.get('/projects/:id', (req,res)=>{
    const { id } = req.params;
    conn.query('SELECT * FROM projects WHERE id = ?',[id], (error, rows, fields)=> {
        if (!error) {
            res.json(rows[0])
        } else {
            console.log(error)
        }    
    });
})

router.post('/projects', (req,res)=>{
    const { name,phone,email } = req.params
    conn.query('INSERT INTO projects (id_user,name,description,status) VALUES(?,?,?,?)',[id_user,name,description,status], (error, rows, fields)=> {
        if (!error) {

            res.json({status: 'User saved'})
        } else {
            console.log(error)
        }    
    });
})

router.put('/projects/:id', (req,res)=>{
    const { id,name,phone,email } = req.params
    conn.query('UPDATE projects SET ? WHERE id = ?',[{name:name},{description:description},{status:status},{id:id}], (error, rows, fields)=> {
        if (!error) {
            res.json({status: 'User updated'})
        } else {
            console.log(error)
        }    
    });
})

router.delete('/projects/:id', (req,res)=>{
    const { id } = req.params;
    conn.query('DELETE FROM projects WHERE id = ?',[id], (error, rows, fields)=> {
        if (!error) {
            res.json({status: 'User deleted'})
        } else {
            console.log(error)
        }    
    });
})

module.exports = router