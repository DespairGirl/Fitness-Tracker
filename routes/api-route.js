const db=require('../models/workouts')


module.exports=(app) =>{
    app.get('/api/workouts', (req,res)=>{
        db.Workout.find({},(err,wrk)=>{
            if (err){
                console.log(err)
            }
            else{
                res.json(wrk);
            }

        });
    });

    app.post('/api/workouts', (req,res)=>{
        db.Workout.create({})
        .then(newWorkOut=>{
            res.json(newWorkOut);
        });
    });

    app.put('/api/workouts/:workout', ({params,body},res)=>{
        db.Workout.findOneAndUpdate({_id: params.id},
            {$push: {exercises:body}},
            {upsert: true, useFindsndModify:false},
            updatedWorkout=>{
                res.json(updatedWorkout);
            })

    });
}

