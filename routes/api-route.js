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

    app.post('api/workouts', (req,res)=>{
        db.Workouts.create({})
        .then(newWorkOut=>{
            res.json(newWorkOut);
        });
    });

    app.put('api/workouts/:workout', ({params,body},res)=>{
        db.Workouts.findOneAndUpdate({__id: params.id},
            {$push: {exercises:body}},
            {upsert: true, useFindsndModify:false},
            updatedWorkout=>{
                res.json(updatedWorkout);
            })

    });
}

