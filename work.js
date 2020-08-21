var maininp1=document.getElementById('maininp1');
var container1=document.getElementById('container1');
var helpmodal=document.getElementById('helpmodal');
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
// var sizeall=[];
var diffsize=[];
var moveflag=0;
var resizeflag=0;
var pp;
var ppall=[];
var rect;
var j;
var containers=[];
var resizex,resizey;


for(var i=0;i<noofcook;i++){
    diff.push({x:0,y:0});
    diffsize.push({x:0,y:0});
}

window.addEventListener('mousedown',(e)=>{
    containers=document.getElementsByClassName('container');
    for(var i=0;i<containers.length;i++){
        rect=containers[i].getBoundingClientRect();
        coor.x=rect.x+rect.width;   
        coor.y=rect.y+rect.height;
        // console.log(coor.x,coor.y);
        // console.log(e.x,e.y);
        if((e.x>coor.x-4 && e.x<coor.x+4) && (e.y>coor.y-4 && e.y<coor.y+4)){
            console.log('works!');
            // where
            j=i;
            resizeflag=1;
            window.addEventListener('mousemove',resize.handleEventFunc);
            break;
        }
    }
});

window.addEventListener('mouseup',(e)=>{
    if(resizeflag==1){
        window.removeEventListener('mousemove',resize.handleEventFunc);
        diffsize[j]={x:resizex-1,y:resizey-1};
        resizeflag=0;
    }
})

var resize={
    handleEventFunc: function(ev){
        ev.preventDefault;
        resizex=1+((ev.x-coor.x)/rect.width)+diffsize[j].x;
        resizey=1+((ev.y-coor.y)/rect.height)+diffsize[j].y;

        containers[j].style.transform='translate('+(diff[j].x)+'px ,'+(diff[j].y)+'px'+')scale('+ resizex + ', '+ resizey +')'
    }
}

window.addEventListener('mousedown',(e)=>{
    pp=e.target.parentElement.parentElement;
    containers=document.getElementsByClassName('container');
    
    for(var i=0;i<containers.length;i++){
        rect=containers[i].getBoundingClientRect();
        if(e.x>rect.x && e.x<rect.x+rect.width-7 && e.y>rect.y && e.y<rect.y+rect.height-7){
            // console.log('dan');
            pp=containers[i];
            break;
        }
    }

    if(pp.id.substr(0,9)=='container')
    {
        moveflag=1;
        // if(!(ppall.includes(pp))){
            // ppall.push(pp);
            // console.log(containers);
            // j=containers.indexOf(pp);
            for(var i=0;i<containers.length;i++){
                if(containers[i]==pp)
                {
                    j=i;
                    break;
                }
            }
            // console.log('here');
            // where=ppall.indexOf(pp);
            // console.log(where);
            // diff[j]={x:0,y:0};
        // }
        // else{
        //     console.log('there');
        //     where=ppall.indexOf(pp);
        //     console.log(where);
        // }
        click.x=e.x;
        click.y=e.y;
        // console.log("yes");
        window.addEventListener('mousemove',move.handleEventFunc);
    }
    // console.log(click.x,click.y);
});
window.addEventListener('mouseup',(ev)=>{
    if(moveflag==1){
    window.removeEventListener('mousemove',move.handleEventFunc);
    diff[j]={x:diff[j].x+drag.x-click.x,y:diff[j].y+drag.y-click.y};
    moveflag=0;
}});

var move = {
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
        pp.style.transform='translate('+(diff[j].x + x)+'px ,'+(diff[j].y + y)+'px'+')scale('+ (1+diffsize[j].x) +', '+ (1+diffsize[j].y) +')';
    }
}

function helpmodalon(){
    helpmodal.style.display='block'
}
window.addEventListener('click',(event)=>{
    if(event.target.id=='helpmodal'){
        helpmodal.style.display='none';
    }
});

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
    diff.push({x:0,y:0});
    diffsize.push({x:0,y:0});

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
        if(maininp.value[i].toLowerCase()=='o'){
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
        else if(maininp.value.substr(i,2).toLowerCase()=='re'){
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
    if(maininp.value!=''){
        container.style.border=" 1px solid lightgrey";
    }   
    else{
        container.style.border="none";
    } 
});