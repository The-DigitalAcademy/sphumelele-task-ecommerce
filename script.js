// PRODUCTS VARIABLE
var productsState = [
  {
    id: 1,
    name: '',
    price: 2800000,
    rates: 3,
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg' ,
  },
  {
    id: 2,
    name: '',
    price: 2300000,
    rates: 3,
    image:
      'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
  },
  {
    id: 1,
    name: '',
    price: 700000,
    rates: 2,
    image:
      'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607',
  },
  {
    id: 1,
    name: '',
    price: 8000000,
    rates: 1,
    image:
      'https://www.portnews.com.au/images/transform/v1/crop/frm/38YbjLjtVg4TfuAWfqQmftU/1cc5c609-2488-4787-bb55-a7dd729f2332.jpg/r0_0_4928_3280_w1200_h678_fmax.jpg',
  },
  {
    id: 1,
    name: '',
    price: 4000000,
    rates: 1,
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-house-2-1538579843.jpg?crop=1.00xw:0.731xh;0,0.264xh&resize=480:*',
  },
  {
    id: 1,
    name: '',
    price: 1500000,
    rates: 5,
    image:
      'https://www.airtasker.com/blog/wp-content/uploads/2019/09/shutterstock_48352354.jpg',
  },
  {
    id: 1,
    name: '',
    price: 2000000,
    rates: 4,
    image:
      'https://wpmedia.roomsketcher.com/content/uploads/2022/01/06154409/Modern-house-avi-werd-unsplash.jpg',
  },
  {
    id: 1,
    name: '',
    price: 1200000,
    rates: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMX_pTfqQcaBKGSjbNgf73YG1QkFbYn6Hfg&usqp=CAU',
  },
]

var showdis = []

// LINK JS TO HTML ELEMENT
const products = document.getElementById('products')
const productpic = document.getElementById('productpic');
const ADD = document.getElementById('ADD')

function show(i){
    showdis.push(productsState[i])
    numshopping = document.getElementById('numshopping')

    disshow()

  homeshowProducts() 

  calculate() 
}

// DISPLAY PRODUCTS IN HOME PAGE
function homeshowProducts() { 
    products.innerHTML = ""
  // loop into productsState and display
  for (let i = 0; i < productsState.length; i++) {
    products.innerHTML += `
    
    <div class="product">
        <div class="product__img">
            <img
              src=${productsState[i].image}
              alt=""
            />
        </div>
            <div class="product__name">${productsState[i].name}</div>
              <div class="product__rate">
                ${'<span>*</span>'.repeat(productsState[i].rates)}
              </div>
              <div class="product__price">R <span>${productsState[i].price}</span></div> 
                <button onclick="show(${i})">+ ADD TO CART</button> 
          </div>
    `
    
  }
  numshopping.innerHTML = showdis.length;
  
}

function disshow(){
  productpic.innerHTML = ""
  // loop into productsState and display
  for (let i = 0; i < showdis.length; i++) {
    productpic.innerHTML += `
  
    <div class="product">
        <div class="product__img">
            <img
              src="${showdis[i].image}"
              alt=""
            />
        </div>
            <div class="product__name">${showdis[i].name}</div>
              <div class="product__rate">
                ${'<span>*</span>'.repeat(showdis[i].rates)}
              </div>
              <div class="product__price">R <span>${showdis[i].price}</span></div>
             <button onclick="clearAll(${i})">remove</button>  
          </div>
    `
   
  }
  
 
}

function clearAll(i) {
  showdis.splice(i,1)

  disshow()
  
  homeshowProducts()

  calculate() 
}

ADD.innerHTML = showdis.length

function calculate() {
   total = 0;

  for (let i = 0; i <showdis .length; i++) {
  
    total += showdis[i].price;

    document.getElementById('ADD').innerHTML = total;
    
  }
}

disshow()
// CALL THE DISPLAY FUNCTION
homeshowProducts()
calculate()