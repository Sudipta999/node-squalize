
controller.createNew = async function (req, res) {
    try {
        //   check data has already been created
        const checkData = await model.user.findAll({
        where: {
            [Op.or]: {
                username: req.body.username,
                password: req.body.password,
                },
            },
        });
    if (checkData.length > 0) {
        res.status(500).json({ message: "username/password has already in use" });
    } else {
        await model.user
            .create({
            username: req.body.username,
            password: req.body.password,
            token: req.body.username + req.body.password,
        })
        .then((result) => {
            res.status(201).json({
            message: "user successful created",data: {
            username: req.body.username,
            password: req.body.password,
            token: req.body.username + req.body.password,
                },
            });
        });
    }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};