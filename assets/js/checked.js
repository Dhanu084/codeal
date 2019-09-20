//works only when the first checkbox is selected so not using this js file
console.log('JS loaded')
function track(){
var agreed = document.getElementById('agreed');
var ps=document.getElementsByTagName('p');

if (agreed.checked == true){
    for(let i=0;i<ps.length;i++){
        ps[i].style.textDecoration="line-through";
    }

}
else{
    for(let i=0;i<ps.length;i++){
        ps[i].style.textDecoration=null;
    }
}

}
