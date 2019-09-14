tasks=[]
module.exports.home =function(req,res){
    res.render('home',{
        title:'Todo list',
        'tasks':tasks
    })
}

module.exports.addTasks=function(req,res){
    // console.log(req.body)
    tasks.push(req.body)
    res.redirect('back');
    }

module.exports.deleteTasks=function(req,res){
    console.log(Object.keys(req.body));
    Object.keys(req.body).forEach(function(key){
        console.log(key[0]);
        let description = key.split(',');
        console.log('desc',description);
        let index = tasks.findIndex(task_index => task_index.description == description[0] && task_index.date == description[1]);
        if(index==-1){
            return;
        }
        tasks.splice(index,1);
    })
    // let desc = Object.keys(req.body[0]);
    // let index = tasks.findIndex(task => task.description==desc);
    // tasks.splice(index,1);
    res.redirect('back');
    };
