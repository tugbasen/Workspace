const express = require('express');
const router = express.Router();

//Models
const Book = require('../models/Book');

router.get('/new', function(req, res, next) {
  const book = new Book({
    title: 'Udemy',
    published: true,
    comments:[
      {message: 'harika bir mesaj'}, 
      {message : 'ben pek beğenmedim'}
    ],
    meta:{
      votes: 12,
      favs:104
    }
  });
  book.save((err, data)=>{
    if(err)
      console.log(err);
    res.json(data);
  });
});

router.get('/search', (req, res)=>{
  Book.find({published:false}, 'title comments' ,(err,data)=>{
    res.json(data);
  });
});

router.get('/searchOne',(req, res)=>{
  Book.findOne({title:'Udemy'}, (err, data)=>{
    res.json(data);
  });
});

router.get('/searchById',(req, res)=>{
  Book.findById('61979092d7921be3f0542457', (err, data)=>{
    res.json(data);
  });
});

router.put('/update',(req, res)=>{
  Book.update(
    {published: false},
    {published:true},
    {
      //multi:true
      upsert:true
    },
    (err, data)=>{
    res.json(data);
  });
});

router.put('/updateById',(req, res)=>{
  Book.findByIdAndUpdate('61979092d7921be3f0542455',
  {
    title: 'hello world'
  },
  (err, data)=>{
    res.json(data);
  });
});

router.delete('/remove',(req,res)=>{
  Book.findById('61979092d7921be3f0542456', (err,book)=>{
    res.json(book);
  })
});

module.exports = router;
