const express =require('express');
const router = express.Router();



const {person,
    PersonPost,
    PersonPostman,
    UpdatePerson,
    deletePerson}=require('../controller/control-people')

// router.get('/',person)

// //post method example
// router.post('/',PersonPost)

// router.post('/postman',PersonPostman)
// //put method 
// router.put('/:id',UpdatePerson)

// //delete method 
// router.delete('/:id',deletePerson)
router.route('/').get(person).post(PersonPost);
router.route('/postman').post(PersonPostman);
router.route('/:id').put(UpdatePerson).delete(deletePerson);



module.exports=router;
