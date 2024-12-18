async function getData() {

        let x = await fetch("https://api.escuelajs.co/api/v1/products");
        let data = await x.json(); 

        console.log("data is being loaded");

        data.forEach((x)=>{
            console.log(x.category.image)

            



            let product = document.createElement("div");
        product.setAttribute("class", "product");
        
        let html = `

            <div class="product-img-outer">
                <img src="${x.category.image    }" alt="" class="product-img">
            </div>
            <h2 class="product-title">${x.title}</h2>
            <h3 class="product-price"> ${"₹"}${x.price}</h3>

`;
product.innerHTML = html;

let productMain = document.querySelector(".product-outer");
productMain.append(product);    




        })


            
}





getData();
