let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid input");
    }
}

function clr(){
    result.value="0";
}

function del(){
    result.value=result.value.slice(0, -1)
}
