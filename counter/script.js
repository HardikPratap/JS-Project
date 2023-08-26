
let count=0;

const value=document.querySelector('#value');
const btns=document.querySelectorAll('.btn');

btns.forEach(function(item) {
    item.addEventListener('click', function(e){
        const styles=e.currentTarget.classList;
        // console.log(styles);
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('reset')){
            count=0;
        }
        else {
            count++;
        }
        if(count>0){
            value.style.color='Green';
        }
        if(count<0){
            value.style.color='Red';
        }
        if(count===0){
            value.style.color='Black';
        }
        value.textContent=count;
    })
});