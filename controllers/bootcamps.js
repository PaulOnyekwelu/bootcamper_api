const Bootcamp = require('../models/Bootcamp')


// global desc: api/v1/bootcamps

// @desc      get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    public
exports.getBootcamps = (req, res, next) => {
  return res.status(200).json({success: true, message: 'show all bootcamps'})
}

// @desc      get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    public
exports.getBootcamp = (req, res, next) => {
  const id = req.params.id;
  return res.status(200).json({success: true, message: `single bootcamp, id: ${id}`})
}

// @desc      create a new bootcamp
// @route     POST /api/v1/bootcamps
// @access    private
exports.createBootcamp = async(req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body)
  return res.status(200).json({success: true, data: bootcamp})
}
