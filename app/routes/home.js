'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {bg: 'homebg.jpg', title: 'Todo List: Home'});
};

exports.help = (req, res)=>{
  res.render('home/help', {title: 'Node.js: Help'});
};
