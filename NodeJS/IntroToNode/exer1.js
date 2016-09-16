
function echo(value,times){
    for(var i=0;i<times;i++)
        console.log(value);
}

/*echo("echo!!!",10);
echo("xyz",3);*/

function average(scores){
    
    var sum=0;
    /*for(var i=0;i<scores.length;i++)
        sum+=scores[i];*/
        
    scores.forEach(function(score){
        sum+=score;
    })
        
    
    console.log(Math.round(sum/scores.length));
}

var scores = [1,2,3,11];

average(scores);
