const express = require('express'),
router = express.Router()
dorcas = require('../models/dorcas')

router.get('/', async (req,res)=>{
    let searchOpt = {}
    if(req.query.name != null && req.query.name !==''){
        searchOpt.name = new RegExp(req.query.name, 'i')
        console.log(searchOpt)
    }
    try {
        const reps = await dorcas.find(searchOpt)
        res.render('index', {
            reports: reps,
        searchOpt: req.query
        })
    } catch (error) {
        res.redirect('/')
    }
    
    })

    router.get('/new',  (req,res)=>{
        res.render('new', {stud: new dorcas()})
       })

       router.get('/:id',  (req,res)=>{
       res.send(req.params.id)
       })
       
       
       router.post('/', async (req,res)=>{
        
                   let stud = new dorcas({name: req.body.name,
               message: req.body.message,
           report: req.body.report
           })
          // console.log(stud)
           try {
            stud = await stud.save()
           // res.render('/new', {stud:stud})
           } catch (error) {
            console.log(error)
            res.render('/new', {stud:stud})
           }
          
           res.json({
               status: 'success',
               name: req.body.name
           })
       })

    
module.exports = router