var maininp=document.getElementById('maininp');
var container=document.getElementById('container');

maininp.value='';
var z=200;

window.addEventListener('input',(ev)=>{    
    container.innerHTML='';
    z=200;
    // console.log(maininp.value);

    for(var i=0;i<maininp.value.length;){
        // console.log(maininp.value);
        if(maininp.value[i]=='o'){
            // console.log('o');
            i++;
            var div=document.createElement('div');
            if(i!=0){
                div.classList.add('downo');
            }
            else{
                div.classList.add('upo');
            }
            div.style.zIndex=z;
            z--;
            var img=document.createElement('img');
            img.src='./images/O.png';
            img.classList.add('oimg');
            div.appendChild(img);
            container.appendChild(div);
        }
        else if(maininp.value.substr(i,2)=='re'){
            var div=document.createElement('div');
            console.log(i);
            if(i==0){
                div.classList.add('upre');
                var img=document.createElement('img');
                img.src='./images/up-RE.png';
                img.classList.add('reimg');
                div.style.zIndex=z;
                z--;
                div.appendChild(img);
                container.appendChild(div);
            }
            else{
                div.classList.add('downre');
                var img=document.createElement('img');
                img.src='./images/down-RE.png';
                img.classList.add('reimg');
                div.style.zIndex=z;
                z--;
                console.log(z);
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
});