const Student = require('../models/student')

module.exports = class StudentController {
        static async register(req, res){
            const {name, age, degree, status} = req.body

            const student = new Student({
                    name,
                    age,
                    degree,
                    status
            })

            await student.save()
                .then(() =>{res.status(200).json({message:"Estudante adicionado"})})
                .catch(error => console.log(error))
        }

        static async getAllStudent(req, res){
                const studants = await Student.find()
                console.log(studants)
                res.status(200).json({studants:studants})
        }
        
        static async getStudent(req, res){
                const id = req.params.id

                const student = await Student.findById(id)
                res.status(200).send(student)

        }

        static async updateStudant(req, res){
                const id = req.params.id 

                const studant = {
                        name:req.body.name,
                        age:req.body.age,
                        degree:req.body.degree,
                        status:req.body.status
                }
               //console.log(studant)

                const updateStudant = await Student.findByIdAndUpdate(
                        {_id:id},
                        {$set:studant},
                        {new:true}
                )
                console.log(updateStudant)
                
                try {
                        res.status(200).send(updateStudant)
                } catch (error) {
                       console.log(error) 
                }
                
        }

        static async removeStudante(req, res){
                const id = req.params.id 

                await Student.findByIdAndRemove(id)

                res.status(200).json({message:"Estudante removido com sucesso"})
        }
}