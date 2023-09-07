const {prisma} = require('../prisma/prisma-client')


const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany()
        res.status(200).json(employees)
    } catch {
        res.status(500).json({message: 'Failed to get employees'})
    }
}

const add = async (req, res) => {
    try {
        const data = req.body
        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({message: 'All fields are required'})
        }
        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id
            }
        })
        return res.status(201).json(employee)
    } catch {
        res.status(500).json({message: 'Something wrong'})
    }
}
module.exports = {
    all,
    add
}