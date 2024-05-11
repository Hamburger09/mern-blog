import User from '../models/user.model.js'

const test = (req, res) => {
    res.json({
        message: 'API is working'
    })
}

export {test}