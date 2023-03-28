const express = require('express');
const app = express();
const port = 8080;
const xehoiModel = require('./xehoiModel');

const { default: mongoose } = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/cp17310';


app.get('/', async (req, res) => {
   await mongoose.connect(uri).then(console.log("Ok men"));
   let xehois = await xehoiModel.find();
   console.log(xehois);
   res.send(xehois);
});
app.get('/add_xe', async (req, res) => {
   await mongoose.connect(uri).then(console.log("Ok men"));


   await xehoiModel.insertMany([{
      Ten: "Vin Phat",
      Nam: 2000,
      GiaBan: 19999090
   }]);


   let xehois = await xehoiModel.find();
   res.send(xehois);



});
app.get('/delete_xe', async (req, res) => {
   await mongoose.connect(uri).then(console.log("Ok men"));

   var query = { Ten: "Vin Phat UpDate3000" };
   await xehoiModel.deleteOne(query);
   let xehois = await xehoiModel.find();
   res.send(xehois);



});
app.get('/update_xe', async (req, res) => {
   await mongoose.connect(uri).then(console.log("Ok men"));


   var oldValue = { Ten: "Vin Phat" };
   var newValue = { Ten: "Vin Phat UpDate3000", Nam: 21010, GiaBan: 99000000 };
   await xehoiModel.updateOne(oldValue, newValue);
   let xehois = await xehoiModel.find();
   res.send(xehois);



});
app.listen(port, () => {
   console.log('listening on port ${port}');
});