const usermodel = require('../model/usermodel');

const create_emp = async (req, res) => {
    try {
        const { empId, empName, empNumber, empEmail } = req.body;
        const newuser = new usermodel({ empId, empName, empNumber, empEmail });
        await newuser.save();
        res.json({ message: "User Created" })
    }
    catch (error) {
        console.log(error);
        res.json({ message: "error" })
    }
}

const get_emp = async (req, res) => {
    try {
        const getuser = await usermodel.find();
        res.json(getuser)
    }
    catch (error) {
        console.log(error);
        res.json({ message: "error" })
    }
}

const update_emp = async (req, res) => {
    try {

        const update_emp = req.body.update_emp;
        const updateemp = {
            empId: req.body.empId,
            empName: req.body.empName,
            empNumber: req.body.empNumber,
            empEmail: req.body.empEmail
        }
        await usermodel.findByIdAndUpdate(update_emp, { $set: updateemp })
        res.json({ message: "User Update" });
    } catch (error) {
        console.log(error);
        res.json({ message: "error" });
    }
} 

const delete_emp = async (req, res) => {
    try {
        const userId = req.body.userId;
        await usermodel.findByIdAndDelete(userId)
        res.json({ message: "User Deleted" })

    } catch (error) {
        console.log(error);
        res.json({ message: "Error" });
    }
}

const getone_emp = async (req, res) => {
    try {
        const userId = req.body.userId;
        const oneuser = await usermodel.findById(userId)
        res.json(oneuser)

    } catch (error) {
        console.log(error);
        res.json({ message: "Error" });
    }
}

module.exports = { create_emp, get_emp, update_emp, delete_emp, getone_emp };