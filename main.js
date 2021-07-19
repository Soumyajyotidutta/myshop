
function storeproduct(){
    let form=document.getElementById("myform");

    let brand=form.brand.value;
    let price=form.price.value;
    let image=form.image.value;

    let product={
        brand,
        price,
        image
    }

    let arr;
    arr=localStorage.getItem("products");

    if(arr==null){
        arr=[];

    }else{
        arr=JSON.parse(localStorage.getItem("products"))
    }
    arr.push(product);
    localStorage.setItem("products",JSON.stringify(arr));

}

function productpage(){
    window.location.href="product1.html"
}



function appendproduct(el){
  let data_div=document.getElementById("data");
  

  let div=document.createElement("div");
 

  let p_brand=document.createElement("p");
  p_brand.innerHTML=el.brand
   

  let p_price=document.createElement("p");
      
  p_price.innerHTML=el.price
    let p_image=document.createElement("img");
     p_image.src=el.image;
       
          
      let btn=document.createElement("button");
      btn.textContent="Add product to cart";
      
      btn.addEventListener("click",function(){
        addtocart(el);
    })

      btn.style.display="block";
     


      div.append(p_image,p_brand,p_price,btn)
      data_div.append(div);


}

function showproduct(d){
    let data=d;
    for(var i=0;i<data.length;i++){
        var el=data[i];
        appendproduct(el)
    }
 
 }

 showproduct(JSON.parse(localStorage.getItem("products")))

 function sortlh(){
    let p=JSON.parse(localStorage.getItem("products"))
    p=p.sort(function(a,b){
        return a.price-b.price;
    })
 showproduct(p)

}

function sorthl(){
    let p=JSON.parse(localStorage.getItem("products"))
    p=p.sort(function(a,b){
        return b.price-a.price;
    })
 showproduct(p)

}
 


 function addtocart(obj){
     let arr;
     arr=localStorage.getItem("cart");
     
     if(arr==null){
         arr=[]
     }else{
         arr= JSON.parse(localStorage.getItem("cart"))
     }
     arr.push(obj);
     localStorage.setItem("cart",JSON.stringify(arr));
 }

 function gotocart(){
     window.location.href="cart.html"
 }
