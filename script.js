var div_id = document.getElementById('first');
document.body.appendChild(div_id.cloneNode(true)).id = "second";
document.body.appendChild(div_id.cloneNode(true)).id = "third";
document.body.appendChild(div_id.cloneNode(true)).id = "fourth";
document.body.appendChild(div_id.cloneNode(true)).id = "fifth";
document.body.appendChild(div_id.cloneNode(true)).id = "sixth";

var t = [["one", "six"], ["four", "six"], ["one", "three", "five"], ["four", "five", "six"], ["one", "two", "five", "six"],
        ["two", "four", "six"], ["one", "two", "three", "five", "six"],  ["one", "four", "six"],
        ["one", "two", "three", "four", "five", "six"], ["one", "two", "four", "five", "six"]];

var block_names=['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
var tabs = ['one', 'two', 'three', 'four', 'five', 'six'];
var d, hrs, min, sec, wall, time, s;

function uniClock(){
    d = new Date();
    hrs = d.getHours();
    min = d.getMinutes();    
    sec = d.getSeconds();
    time = [Math.floor(hrs/10), Math.floor(hrs%10), Math.floor(min/10), Math.floor(min%10), Math.floor(sec/10), Math.floor(sec%10)];
    for(x in time){
        wall = document.getElementById(block_names[x]);
        for(y in t[time[x]]){
            tabs.forEach(z => {
                s=t[time[x]].includes(z);
                if(s){
                   wall.querySelector("."+z).classList.add('active');
                }else{
                   wall.querySelector("."+z).classList.remove('active');
                }    
            });
        }
    }
   setTimeout(uniClock, 1000);
}

