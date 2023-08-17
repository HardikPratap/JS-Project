let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

setInterval(()=>{
    let curr_time=new Date();

    hrs.innerHTML=(curr_time.getHours()<10?"0" :"") +curr_time.getHours() ;
    min.innerHTML=(curr_time.getMinutes()<10?"0" :"") +curr_time.getMinutes()
    sec.innerHTML=(curr_time.getSeconds()<10?"0" :"") +curr_time.getSeconds()
    }
    ,1000)




