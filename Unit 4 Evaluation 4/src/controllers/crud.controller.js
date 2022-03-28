const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);
    } catch (error) {
        return res.status(401).send({ Error: error });
    }
};

const deleteOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(item);
    } catch (error) {
        return res.status(401).send({ Error: error });
    }
};;

module.exports = { Post: post, Delete: deleteOne };