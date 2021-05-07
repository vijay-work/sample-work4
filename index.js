var level=1;
var x=0;
var y=0;
var comp=[];
var player=[];
var k;
var m=0;
var p;
var timeouts = [];
var b=[];
b[0]=$(".btn-red");
b[1]=$(".btn-blue");
b[2]=$(".btn-yellow");
b[3]=$(".btn-green");

var btnColor=[];
btnColor[0]="red";
btnColor[1]="blue";
btnColor[2]="yellow";
btnColor[3]="green";

var audio=[];
audio[0]= new Audio("red.mp3");
audio[1]= new Audio("blue.mp3");
audio[2]= new Audio("yellow.mp3");
audio[3]= new Audio("green.mp3");
audio[4]= new Audio("wrong.mp3");

$(".btn").each(function(index, element){
$(this).on("click",function(){
    b[index].animate({backgroundColor:"black"}, 100);
    b[index].animate({backgroundColor:btnColor[index]}, 100); 
    audio[index].play();
    player[y]=index; y++;
    compare();
    
} );
});

$(".clickMe").on("click", function(){
    $(this).css("display", "none");
    playRound(level);
});

function previ(j){
    m=(500*j)+500;
    timeouts.push(setTimeout(function () {
        $(document).css("pointerEvents","none");
        k=comp[j-1];
        b[k].animate({backgroundColor:"white", border: "white"}, 200);
        b[k].animate({backgroundColor:btnColor[k], border: "black"}, 100); 
        audio[k].play();
        }, m));
}



function playRound(lev){
    $("p").text("Level "+lev);
    $(document).css("pointerEvents","none");
    var i=1;
    while(i<lev){
        previ(i);
    i++;
    }

    p=m+500;
    timeouts.push(setTimeout(function () {
        $(document).css("pointerEvents","none");
        var n = Math.random()*4;
        n=Math.floor(n);
        b[n].animate({backgroundColor:"white", border: "white"}, 200);
        b[n].animate({backgroundColor:btnColor[n], border: "black"}, 100); 
        audio[n].play();
        comp[x]=n; x++;
    }, p));
        
    
}

function compare(){
    var success=1;
        if(comp[y-1]!=player[y-1]){success=0;}
    if(success==0){
        $("body").animate({backgroundColor:"red"}, 200);
        $("body").animate({backgroundColor:"#2f4f4f"}, 200); 
        audio[4].play();
        for (var i=0; i<timeouts.length; i++) {
            clearTimeout(timeouts[i]);
          }
        $(".clickMe").css("display", "inline-block");
        level=1; m=0;
        $("p").text("Simon Game: Watch and Repeat");
        x=0; y=0;
        
    }
    else{
        if(y==x){
            y=0;
            level++;
            playRound(level);}
        
    }
}
