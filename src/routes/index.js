const {Router}=require('express');
const router=  Router();
const key1 = "$2b$10$a5wk2P4SCqiyJI3txonFd.otYX7iM8SguharNVNU9EMPKgv6XjCXa";

router.get('/test',(req, res)=>{
    const data={
        "name":"Fazt",
        "website":"fazweb.com" 

    }
    res.json(data);
})

module.exports=router;