const express = require('express');
const router = express.Router();

const conn = require('../connection.js');

router.get('/users', (req,res)=>{
    conn.query('SELECT * FROM users', (error, rows, fields) => {
        if (!error) {
            res.json(rows)
        } else {
            console.log(error)
        }    
    });
})

router.get('/users/:id', (req,res)=>{
    const { id } = req.params;
    conn.query('SELECT * FROM users WHERE id = ?',[id], (error, rows, fields)  => {
        if (!error) {
            res.json(rows[0])
        } else {
            console.log(error)
        }    
    });
})

router.post('/users', (req,res) => {
    const { name,phone,email } = req.params
    conn.query('INSERT INTO users (name,phone,email) VALUES(?,?,?)',[name,phone,email], (error, rows, fields)=> {
        if (!error) {

            res.json({status: 'User saved'})
        } else {
            console.log(error)
        }    
    });
})

router.put('/users/:id', (req,res) => {
    const { id,name,phone,email } = req.params
    conn.query('UPDATE users SET ? WHERE id = ?',[{name:name},{phone:phone},{email:email},{id:id}], (error, rows, fields)=> {
        if (!error) {
            res.json({status: 'User updated'})
        } else {
            console.log(error)
        }    
    });
})

router.delete('/users/:id', (req,res) => {
    const { id } = req.params;
    conn.query('DELETE FROM users WHERE id = ?',[id], (error, rows, fields)=> {
        if (!error) {
            res.json({status: 'User deleted'})
        } else {
            console.log(error)
        }    
    });
})

module.exports = router