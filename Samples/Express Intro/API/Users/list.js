module.exports=function(req, res) {
    res.json({ users: [
        {userId: 1 },
        {userId: 2 },
        {userId: 3 },
        {userId: 4 },
        {userId: 5 }
    ],totalCount:5 });
};