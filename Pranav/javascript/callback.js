function display(a,b,myfun)
{
    console.log(myfun(a,b))
}
function sum(a,b){
    return a+b
}
function minus(a,b){
    return a-b
}

display(a,b,sum)