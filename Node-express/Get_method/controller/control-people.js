let {people}=require('../data-for-get');

const person =(req,res)=>{

    res.status(200).send({success:true,data:people});
}

const PersonPost=(req,res)=>{
    const{name}=req.body
    if(!name){
        res.status(400).json({success:false,msg:"pleaze provide name value"})
    }
res.status(201).json({success:true,person:name})

}


const PersonPostman=(req,res)=>{
    const{name}=req.body
    if(!name){
        res.status(400).json({success:false,msg:"pleaze provide name value"})
    }
res.status(201).json({success:true,data:[...people,name]})

}


const UpdatePerson=(req,res)=>{
    const{id}=req.params
    const {name}=req.body
    

    const person =people.find((person)=>person.id===Number(id))
if(!person){

  return  res.status(404).json({success:false,msg:"please provide name and value"})
}

const newPeople=people.map((person)=>{
    if(person.id===Number(id)){
        person.name=name;
    }
    return person
})

router.status(200).json({success:true, data:newPeople})

}


const deletePerson=(req,res)=>{
const name=people.find((person)=>person.id===Number(req.params.id));
if(!name){
    return res.status(404).json({success:false,msg:`no person founded ${req.params.id}`})
}

const newPerson= people.find((person)=>person.id!==Number(req.params.id));
return res.status(200).json({success:true,data:newPerson})


}


module.exports={
    person,
    PersonPost,
    PersonPostman,
    UpdatePerson,
    deletePerson
}