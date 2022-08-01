let get=document.getElementById("submit")
let getData=()=>{
    alert("your message has been delivered to our company")
}
get.addEventListener("click",getData)


let ajaxLoadedContact=()=>{
    let itemContact=""
    $.ajax({
        url:"../api/Office.json",
        method:"GET",
        type:"json",
        data:{},
        success:function (response) {
            response.map(function (elem,index) {
                itemContact+=`
                        <div class="itemContact">
                <h4>${elem.city}</h4>
                <h4>${elem.address}</h4>
                <h4>${elem.email}</h4>
                <h4>${elem.phone}</h4>
                        </div>
            `})
            document.getElementById("root").innerHTML=itemContact
        }
    })
}
document.addEventListener("DOMContentLoaded",ajaxLoadedContact)
