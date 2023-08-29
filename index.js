const boxes=document.querySelectorAll('.box');

boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        let val=document.querySelector('.data').value;
        let last_val=val.slice(-1);
        
        if(e.target.innerText=== '='){
            findRes();
        }
        else if(e.target.innerText==="AC"){
            document.querySelector('.data').value="";
        }
        else if(e.target.innerText=== 'x'){
            deleteLast()
        }
        else if(e.target.innerText === '+' && last_val==='-' || e.target.innerText === '-' && last_val==='+' ){
            deleteLast();
            document.querySelector('.data').value+=e.target.innerText;
        }
        else if(e.target.innerText === '*' && last_val==='/'
          || e.target.innerText === '/' && last_val==='*' 
          || e.target.innerText === '+' && last_val==='*' 
          || e.target.innerText === '+' && last_val==='/'
          || e.target.innerText === '/' && last_val==='-'
          || e.target.innerText === '/' && last_val==='+'){
            deleteLast();
            document.querySelector('.data').value+=e.target.innerText;
        }
        else if(e.target.innerText === '*' && last_val==='*' 
        || e.target.innerText === '/' && last_val==='/' 
        || e.target.innerText === '+' && last_val==='+' 
        || e.target.innerText === '-' && last_val==='-' 
        || e.target.innerText === '%' && last_val==='%'){

        }
        else{
            document.querySelector('.data').value+=e.target.innerText;
        }
        
    })
})

function deleteLast(){
    let str=document.querySelector('.data').value;
    str =str.slice(0,-1);
    document.querySelector('.data').value=str;
}
function findRes(){
    let str=document.querySelector('.data').value;
    let ans;
    try{
        ans=eval(str);
    }
    catch(err){
        ans="Wrong Input!";
    }
    document.querySelector('.data').value=ans;
}


