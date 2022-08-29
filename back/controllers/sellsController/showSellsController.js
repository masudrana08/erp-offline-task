const sellsModel = require("../../models/sellsModel");

module.exports = async (req, res) => {
  try {
  const sells = await sellsModel.find().populate({path:'buyer', select:{name:1, _id:0}}).sort({createdAt:-1})
  res.send({data:sells})
  } catch (err) {
   res.status(400).json({message:err.message})
  }
};
