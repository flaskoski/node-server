module.exports = (app)=>{
    app.get("/", function(req, resp){
        resp.sendFile("./index.html");
    })
    
    
    app.get("/toto", function(req, resp){
        console.log('reached toto');
    })
}