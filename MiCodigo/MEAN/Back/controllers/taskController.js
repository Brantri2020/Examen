const Task = require("../models/Task");

exports.getTasks = async(req, res)=>{
    try {
        const tasks =await Task.find();
        res.json(tasks);
    } catch (error) {
        console.log(error);
    }
}

exports.createTask = async (req, res) => {

    try {

      
        let task;

        task = new Task(req.body);
        await task.save();
        res.send(task);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }

}