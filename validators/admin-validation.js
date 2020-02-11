const joi = require('joi');

//register validation
let validateRoom = (req, res, next) => {
    let data = req.body;
    const schema = joi.object().keys({
        roomType: joi.string().required(),
        facilities: [joi.required()],
        price:joi.number().required()
    })
    try {
        joi.validate(data, schema, (err, value) => {
        
            if (err) {
                console.log(err)
                res.send(err)
            } else {
                next();
            }
        });

    } catch (error) {
        throw new error
    }
}



//update room validation
let updateRoomValidation = (req, res, next) => {
    let data = req.body;
    const schema = joi.object().keys({
        roomType: joi.string(),
        facilities: [joi.required()],
        price:joi.number()
    })
    try {
        joi.validate(data, schema, (err, value) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else {
                next();
            }
        });

    } catch (error) {
        throw new error
    }
}




module.exports = {
    validateRoom,
    updateRoomValidation
}