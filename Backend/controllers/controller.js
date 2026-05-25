const EMP = require ('../models/empDetails')
const Inventory = require('../models/inventory')
const Orders = require('../models/orderDetails')
const {uploadOnCloudinary} = require('../utils/cloudinary')

async function GetEmpDetails (req, res) {
    try{
        const details = await EMP.find()
         res.json(details)    
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

async function GetInvenDetails (req, res) {
    try{
        const details = await Inventory.find()
        res.json(details)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

async function GetOrderDetails (req, res) {
    try{
        const details = await Orders.find()
        res.json(details)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}


async function POSTRoute(req, res) {
  try {
    const { items, tableNo } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ msg: "No items were ordered" });
    }
  
    if (!tableNo) {
      return res.status(400).json({ msg: "No table number provided" });
    }
    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,0);
    if (totalAmount <= 0) {
      return res
        .status (400)
        .json ({ msg: "Total amount must be greater than 0"});
    }

    const newOrder = new Orders({ 
      tableNo,
      items,
      totalAmount
    });
    
    await newOrder.save();
    const DisplayOrderId = newOrder._id
                            .toString()
                            .slice(-6)
                            .toUpperCase()

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
      DisplayOrderId
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ 
      message: "Internal Server Error",
      error: error.message
    });
  }
}
 
async function markAsServed (req, res) {
  try {
    const order = await Orders.findByIdAndUpdate(
      req.params.id,
      { status: "served" },
      { new: true }
    );

    res.json({
      success: true,
      message: "Order marked as served",
      order,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

async function changeAvailability(req, res) {
  try {
    const { Availability } = req.body;

    console.log("Incoming availability:", Availability);

    const InventDetails = await Inventory.findByIdAndUpdate(
      req.params.id,
      { Availability },   // ✅ USE REQUEST VALUE
      { new: true }
    );

    res.json({
      success: true,
      message: "Dish availability updated successfully",
      InventDetails
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

async function AddEmployee (req, res) {
  const {name, mobile, designation} = req.body
  const localfile = req.file.path
  const profileUrl = await uploadOnCloudinary(localfile)
 
  console.log("secure url:", profileUrl)
  try {
    const details = new EMP({
      EmpName: name,
      ContactNo: mobile,
      EmpDuty: designation,
      EmpPhoto: profileUrl
    })
    await details.save()
    return res.status(201).json({
      success: true
    })
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ 
      message: "Internal Server Error",
      error: error.message
    });
  }
}


module.exports = { POSTRoute };

module.exports = {
   GetEmpDetails,
   GetInvenDetails,
   GetOrderDetails,
   POSTRoute,
   markAsServed,
   changeAvailability,
   AddEmployee
}