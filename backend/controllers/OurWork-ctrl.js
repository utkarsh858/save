const OurWork = require('../models/OurWork-model')

createOurWork = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const our_work = new OurWork(body)

    if (!our_work) {
        return res.status(400).json({ success: false, error: err })
    }

    our_work
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: our_work._id,
                message: 'OurWork created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'OurWork not created!',
            })
        })
}

updateOurWork = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    OurWork.findOne({ _id: req.params.id }, (err, our_work) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        our_work.title = body.title
        our_work.content = body.content
        our_work
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: our_work._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
}

deleteOurWork = async (req, res) => {
    await OurWork.findOneAndDelete({ _id: req.params.id }, (err, our_work) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!our_work) {
            return res
                .status(404)
                .json({ success: false, error: `OurWork not found` })
        }

        return res.status(200).json({ success: true, data: our_work })
    }).catch(err => console.log(err))
}

getOurWorkById = async (req, res) => {
    await OurWork.findOne({ _id: req.params.id }, (err, our_work) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!our_work) {
            return res
                .status(404)
                .json({ success: false, error: `OurWork not found` })
        }
        return res.status(200).json({ success: true, data: our_work })
    }).catch(err => console.log(err))
}

getOurWorks = async (req, res) => {
    await OurWork.find({}, (err, our_works) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!our_works.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: our_works })
    }).catch(err => console.log(err))
}

getOurWorkByPage = async (req, res) => {
    pageNum = req.params.pageNum
    number_of_required_contents = req.params.numOfElements

    await OurWork.find({}, (err, our_works) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!our_works.length) {
            return res
                .status(404)
                .json({ success: false, error: `OurWork not found` })
        }
        // console.log(our_works.length)
        return res.status(200).json({ success: true,data_length: our_works.length, data: our_works.slice((pageNum-1)*number_of_required_contents,(pageNum)*number_of_required_contents) })
        // return res.status(200).json({ success: true, data: our_works })
    }).catch(err => console.log(err))
}

module.exports = {
    createOurWork,
    updateOurWork,
    deleteOurWork,
    getOurWorks,
    getOurWorkById,
    getOurWorkByPage
}