var maininp1=document.getElementById('maininp1');
var container1=document.getElementById('container1');
var noofcook=1;
maininp1.value='';
var z=200;

var where=0;
var click={
    x:0,
    y:0
};
var coor={
    x:0,
    y:0
};
var drag={
    x:0,
    y:0
};
var diff=[];
var flag=0;
var pp;
var ppall=[];

// window.addEventListener('mousedown',(e)=>{
//     var containers=document.getElementsByClassName('container');
//     for(var i=0;i<containers.length;i++){
//         var rect=containers[0].getBoundingClientRect();
//         coor.x=rect.x+rect.width;   
//         coor.y=rect.y+rect.height;

//     }
// });

window.addEventListener('mousedown',(e)=>{
    pp=e.target.parentElement.parentElement;
    
    if(pp.id.substr(0,9)=='container')
    {
        flag=1;
        if(!(ppall.includes(pp))){
            ppall.push(pp);
            // console.log('here');
            where=ppall.indexOf(pp);
            // console.log(where);
            diff[where]={x:0,y:0};
        }
        else{
            // console.log('there');
            where=ppall.indexOf(pp);
            // console.log(where);
        }
        click.x=e.x;
        click.y=e.y;
        // console.log("yes");
        window.addEventListener('mousemove',obj.handleEventFunc);
    }
    // console.log(click.x,click.y);
});
window.addEventListener('mouseup',(ev)=>{
    if(flag==1){
    window.removeEventListener('mousemove',obj.handleEventFunc);
    diff[where]={x:diff[where].x+drag.x-click.x,y:diff[where].y+drag.y-click.y};
    flag=0;
}});

var obj = {
    handleEventFunc: function (ev) { // tada, now works
        ev.preventDefault();
        drag.x=ev.x;
        drag.y=ev.y;
        var x,y;
        x=drag.x-click.x;
        y=drag.y-click.y;
        // pp.style.left=(drag.x-click.x)+'px';
        // pp.style.top=(drag.y-click.y)+'px';
        // console.log(x,y);
        // console.log(diff[where].x+drag.x-click.x,diff[where].y+drag.y-click.y);
        pp.style.transform='translate('+(diff[where].x + x)+'px ,'+(diff[where].y + y)+'px'+')';
    }
}

function addnewcookie(){
    noofcook++;

    // document.body.innerHTML+=`<div class="mainbox">   
    // <div style="display: block;">
    //     <div style="font-size: small;">
    //         Enter the string:
    //     </div>
    //     <input type="text" id="maininp`+noofcook+`">
    // </div>
    
    // <div class="container" id="container`+noofcook+`">
                
    // </div>
    // </div>`;
    
    var mainbox=document.createElement('div');
    mainbox.classList.add('mainbox');
    var inputbox=document.createElement('div');
    inputbox.innerHTML=`<div style="font-size: small;">
    Enter the string:
    </div>`;
    var input=document.createElement('input');
    input.id='maininp'+noofcook;
    inputbox.appendChild(input);
    var containerbox=document.createElement('div');
    containerbox.id='container'+noofcook;
    containerbox.classList.add('container');
    mainbox.appendChild(inputbox);
    mainbox.appendChild(containerbox);
    document.body.appendChild(mainbox);    
    
    var images=document.getElementsByTagName('img');
    for(var i=0;i<images.length;i++){
        images[i].addEventListener('dragstart',(ev)=>{
            ev.preventDefault();
        })
    }

}

window.addEventListener('input',(ev)=>{    
    
    z=200;
    // console.log(maininp.value);
    var maininp=document.getElementById(ev.target.id);
    var no=Number(maininp.id.substr(7,100));
    var container=document.getElementById('container'+no);
    container.innerHTML='';
    for(var i=0;i<maininp.value.length;){
        // console.log(maininp.value);
        if(maininp.value[i]=='o'){
            // console.log('o');
            
            var div=document.createElement('div');
            if(i!=0){
                div.classList.add('downo');
            }
            else{
                div.classList.add('upo');
            }
            i++;
            div.style.zIndex=z;
            z--;
            var img=document.createElement('img');
            img.src='./images/O.png';
            img.classList.add('oimg');
            img.addEventListener('dragstart',(ev)=>{
                ev.preventDefault();
            });
            div.appendChild(img);
            container.appendChild(div);
        }
        else if(maininp.value[i]=='&'){
            i++;
            var div=document.createElement('div');
            div.classList.add('empty');
            div.style.zIndex=z;
            z--;
            div.appendChild(img);
            container.appendChild(div);
        }
        else if(maininp.value.substr(i,2)=='re'){
            var div=document.createElement('div');
            // console.log(i);
            if(i==0 || maininp.value[i-1]=='&'){
                div.classList.add('upre');
                var img=document.createElement('img');
                img.src='./images/up-RE.png';
                img.classList.add('reimg');
                img.addEventListener('dragstart',(ev)=>{
                    ev.preventDefault();
                });
                div.style.zIndex=z;
                z--;
                div.appendChild(img);
                container.appendChild(div);
            }
            else if(i==maininp.value.length-2){
                div.classList.add('downrelast');
                var img=document.createElement('img');
                img.src='./images/down-RE.png';
                img.classList.add('reimg');
                img.addEventListener('dragstart',(ev)=>{
                    ev.preventDefault();
                });
                div.style.zIndex=z;
                z--;
                // console.log(z);
                div.appendChild(img);
                container.appendChild(div);
            }
            else
            {
                div.classList.add('downre');
                var img=document.createElement('img');
                img.src='./images/down-RE.png';
                img.classList.add('reimg');
                img.addEventListener('dragstart',(ev)=>{
                    ev.preventDefault();
                });
                div.style.zIndex=z;
                z--;
                // console.log(z);
                div.appendChild(img);
                container.appendChild(div);
            }
            i+=2;
        }
        else{
            if(i==maininp.value.length-1 && maininp.value[i]=='r')
            {
                break;
            }
            i++;
        }    
    }
    container.style.border=" 1px solid black";    
});