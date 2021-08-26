const {Router}=require('express');
const router=  Router();


router.get('/test',(req, res)=>{
    const data={
        "name":"Fazt",
        "website":"fazweb.com" 

    }
    res.json(data);
})

module.exports=router;