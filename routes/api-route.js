const db=require('../models')


module.exports=(app) =>{
    app.get('api/workouts', (req,res)=>{
        db.Workouts.find({},(err,wrk)=>{
            if (err){
                console.log(err)
            }
            else{
                res.json(wrk);
            }

        });
    });

    
}

