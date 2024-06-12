const express=require("express")
const bodyparser=require("body-parser")
const date=require(__dirname+"/date.js")
app=express()
var items=[];
var workitems=[];
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set('view engine','ejs')
app.get("/",function(req,res){
   var days=date.getDate();
res.render("list",{kind:days,newItems:items});
});
app.post("/",function(req,res){
    var item=req.body.newItem;
    if(req.body.button==="work"){
    workitems.push(item);
    res.redirect("/work");}
    else{
     items.push(item);
        res.redirect("/");
    }
})
app.get("/work",function(req,res){
    res.render("list",{kind:"work list",newItems:workitems});
})
app.listen(3000,function(){
    console.log("I am back");
}); 