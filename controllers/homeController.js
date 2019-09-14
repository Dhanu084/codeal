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
    console.log(tasks)
    res.redirect('back');
    }
