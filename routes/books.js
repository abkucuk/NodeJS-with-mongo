const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

/* GET home page. */
router.get('/new', function(req, res, next) {
  const book = new Book({
    title:'udemy nodejs 2',

  });
  book.save((err,data)=>{
      if(err){
        console.log(err);
      }
      res.json(data);
  });
});

router.post('/new',(req,res,next)=>{
  const book = new Book({
    title:'udemy nodejs post',
    published:true,
    comments:[
      {message:'knk ben çok beğendim'},
      {message:'çop'}
    ],
    meta:{
      votes:7,
      fav:11
    }
  });  
  book.save((err,data)=>{
    if(err)
      consol.log('kitap kaydederken hata oldu!',err);

    res.json(data);
  });
});

router.get('/search',(req,res,next)=>{
  
  // bi çok parametreyla arama yapmak istiyorsak {published:true} yanına {published:true,bilmemne:7} falan diyebiliriz.
  // ikinci parametre olarak gönderdiğimiz comments şu anlama geliyor: published:true olanların tğm verilerini değilde sadece commentsleri getir
  // eğer comments'in yanına bir boşluk bırakıp title yazarsak hem title hem de commentler gelir
  Book.find({published:true},'comments',(err,data)=>{
    res.json(data);
  });
});

module.exports = router;