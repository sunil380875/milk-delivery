const Milkorder = require("./../model/milkOrderModel");

exports.getAllOrder = async (req, res, next) => {
  try {
    const query = { ...req.query };
    //console.log(query);
    const order = await Milkorder.find(query);
    if (!order) {
      return next(new Error("There is no order"));
    }
    res.status(200).json({
      status: "success",
      result: order.length,
      data: {
        order,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const order = await Milkorder.create(req.body);
    if (!order) {
      return next(new Error("This order place have problem try after again"));
    }
    res.status(200).json({
      status: "success",
      data: {
        order,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getOrder = async (req, res, next) => {
  try {
    const order = await Milkorder.findById(req.params.id);
    if (!order) {
      return next(new Error("There is no order"));
    }
    res.status(200).json({
      status: "success",

      data: {
        order,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Milkorder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return next(new Error("There is no order"));
    }
    res.status(200).json({
      status: "success",

      data: {
        order,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Milkorder.findByIdAndDelete(req.params.id);
    if (!order) {
      return next(new Error("There is no order"));
    }
    res.status(200).json({
      status: "success",
      message: "you delete an order successfully",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
