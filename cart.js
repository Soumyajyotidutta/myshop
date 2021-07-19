
function appendproduct(el){
    let data_div=document.getElementById("data");
    let div=document.createElement("div");
   
  
    let p_brand=document.createElement("p");
    p_brand.innerHTML=el.brand
     
  
    let p_price=document.createElement("p");
        
    p_price.innerHTML=el.price
      let p_image=document.createElement("img");
       p_image.src=el.image;
         
  
      
        
        
   
       
  
  
        div.append(p_image,p_brand,p_price)
        data_div.append(div);
  
  
  }

  function showproduct(){
    let data=JSON.parse(localStorage.getItem("cart"));
    for(var i=0;i<data.length;i++){
        var el=data[i];
        appendproduct(el)
    }
 
 }
 showproduct()

 function cartvalue(){
   
    let data=JSON.parse(localStorage.getItem("cart"));
    let sum=0;
      
    for(var j=0;j<data.length;j++){
        console.log(data[j].price);
        sum=sum+Number(data[j].price);
    }

    // console.log(sum); 
     let div=document.getElementById("cartvalue");
     div.innerHTML=null;
    div.append(sum);
 }

cartvalue();

 function discount(){
    var inp=document.getElementById("promo").value;
    console.log(inp);
    var div=Number(document.getElementById("cartvalue").textContent);
    if(inp=="masai30"){
        div=Math.floor(div*(0.30))
    document.getElementById("cartvalue").style.textDecoration="line-through";
    document.getElementById("cartvalue").style.color="red";

    document.getElementById("value1").append(" ",div);
    document.getElementById("value1").style.color="green"


    }
 }

 function gotocheckout(){
     window.location.href="checkout.html";
 }

 function payment(){
     window.location.href="payment.html"
 }
 
 function otp(){
    window.location.href="otp.html"
}
function placeorder(){
 window.location.href="orderplaced.html"
}
