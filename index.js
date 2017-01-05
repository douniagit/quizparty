var quiz=function(){
    var reponse1=document.getElementById("A");
    var reponse2=document.getElementById("B");
    var reponse3=document.getElementById("C");
    var reponse4=document.getElementById("D");
var rep=[reponse1,reponse2,reponse3,reponse4];

    rep.forEach(function(reponse){
        reponse.onclick=function(){
            var correct=reponse2;
            var init=reponse.style.background;

        if(reponse===correct){
        correct.style.background= "green";
}
    else if(reponse !==correct){
        reponse.style.background= "red",correct.style.background= "green";
    }
    // setTimeout(function(){ reponse.style.background= "transparent",correct.style.background= "transparent"; }, 3000);
}
});


};
quiz();
