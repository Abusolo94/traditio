
const landingPageContainer = document.querySelector('.landing__Page__container')
const admin__container = document.querySelector('.main-container')
const user__container = document.querySelector('.user__container')



const landing__page = document.querySelector('.landing__page__details')

const get__started__btn = document.querySelector('.get__started__btn')
const registration__container = document.querySelector('.registration__form__info')
const customerForm = document.querySelector('.customer')
const adminForm = document.querySelector('.administrator')
const loginForm = document.querySelector('.login__form')
const action__buttons = document.querySelector('.action__buttons')
const allCustomerInput = document.querySelectorAll('.customer input')

let customer__data = []
let admin__date = []
let login__data = []

get__started__btn.addEventListener('click', ()=>{
    landing__page.classList.add('active')
    registration__container.classList.add('active')
})
action__buttons.addEventListener('click', (e)=>{
    if(e.target.className === 'minstrator'){
        adminForm.classList.add('active')
        loginForm.classList.remove('active')
        customerForm.classList.add('active')

    }
    if(e.target.className === 'loginn'){
        loginForm.classList.add('active')
        customerForm.classList.add('active')
        adminForm.classList.remove('active')
        
    }
    if(e.target.className === 'custmer'){
        customerForm.classList.remove('active')
        loginForm.classList.remove('active')
        adminForm.classList.remove('active')
        
    }
})


function renderingCustomerData(){
    const fullname = document.getElementById('fullName')
    const contact = document.getElementById('contact')
    const email = document.getElementById('yemail')
    const address = document.getElementById('address')
    const password = document.getElementById('password')
    const cpassword = document.getElementById('cpassword')
    // const allCustomerInput = document.querySelectorAll('.customer input')

    const customers ={
        fname : fullname.value,
        conts : contact.value,
        cemail :email.value,
        caddress : address.value,
        cspassware : password.value,
        confPass : cpassword.value
    }
    customer__data.push({...customers})
    console.log(customer__data)

    allCustomerInput.forEach(input => input.value = "")
    storeData()
   
  

}
function renderingAdminData(){
    const storeName = document.getElementById('afullName')
    const storeId = document.getElementById('storeID')
    const storeEmail = document.getElementById('ayemail')
    const storeAddress = document.getElementById('aaddress')
    const storeUsername = document.getElementById('auserName')
    const storeTIN = document.getElementById('astoreTin')
    const storePassword = document.getElementById('rrpassword')
    const storeCpassword = document.getElementById('rpassword')
    const allAdminInput = document.querySelectorAll('.administrator input')
    

    const admins = {
        storename : storeName.value,
        storeid : storeId.value,
        storeemail : storeEmail.value,
        storeadress : storeAddress.value,
        username : storeUsername.value,
        storetin : storeTIN.value,
        storepassword : storePassword.value,
        confirmpass: storeCpassword.value


    }
    admin__date.push({...admins})
    allAdminInput.forEach(input => input.value = "")
  

}
function renderingLoginData(){
    const loginEmail = document.getElementById('lyemail')
    const loginPassword = document.getElementById('lpassword')
    const allLoginInput = document.querySelectorAll('.login__form input')

    const login = {
        loginemaill : loginEmail.value,
        loginpassword : loginPassword.value,

    }
    login__data.push({...login})
    allLoginInput.forEach(input => input.value = "")
    landingPageContainer.classList.add('active')
    user__container.classList.add('active')
    platFormBtn.classList.add('active')

}












const menuContainer = document.querySelector('.left-bottom')
const menuItem = document.querySelectorAll('.left-bottom li')
const sectionItem = document.querySelectorAll('section')
const product__btn = document.querySelectorAll('.add__button')



const platFormBtn = document.querySelector('.platform__btns')
const orderRoomCard = document.querySelector('.order_room_info')
const newOderDisplay = document.querySelector('.in__coming__order__infor')

const OrderInfoDisplay = document.querySelector('.order__display')
const viewBtns = document.querySelectorAll('.view')

const menu__el = document.querySelector('.navbar ul')
const menu__icon = document.querySelector('.menu__icon')

menu__icon.addEventListener('click', ()=>{
    menu__el.classList.toggle('active')

})
const admin__menu = document.querySelector('.menu__icon__admin')
const admin_menu__element = document.querySelector('.left-container')

admin__menu.addEventListener('click', ()=>{
    admin_menu__element.classList.toggle('active')

})


platFormBtn.addEventListener('click', (e)=>{
    if(e.target.className === 'admin'){
        admin__container.classList.add('active')
        user__container.classList.add('active')


    }else if(e.target.className === 'user'){
        admin__container.classList.remove('active')
        user__container.classList.add('active')

    }
})

orderRoomCard.addEventListener('click', (e)=>{

    if(e.target.className === 'card newOder'){
        newOderDisplay.classList.add('active')
       

    }
     if(e.target.className === 'card kitchenOrder'){
        newOderDisplay.classList.add('active')

    }
     if(e.target.className === 'card deliveryOrder'){
        newOderDisplay.classList.add('active')

    }
    if(e.target.className === 'card rejectedOrder'){
        newOderDisplay.classList.add('active')

     }
   

})

newOderDisplay.addEventListener('click',(e)=>{
    if(e.target.className === 'new__order__close'){
    newOderDisplay.classList.remove('active')
    return

    }
    if(e.target.tagName === 'BUTTON'){
        viewBtns.forEach((button)=>{
            OrderInfoDisplay.classList.add('active')
    
        })


    }

  

})
 
OrderInfoDisplay.addEventListener('click', (e)=>{
    if(e.target.className === "close__checked"){
        OrderInfoDisplay.classList.remove('active')

    }

})





let productCart = []
let productArray = []
let addminList = []


menuContainer.addEventListener('click', (e)=>{
    let itemData = e.target.dataset.item
    console.log(itemData)

    if(itemData){
        menuItem.forEach(item =>{
            item.classList.remove('active')

        
        })
        e.target.classList.add('active')
            sectionItem.forEach(itemSection =>{
                itemSection.classList.remove('active')
                sec  = document.getElementById(itemData)
                sec.classList.add('active')
    
            })
    }

})



const productWrapper = document.querySelector('.product__details')


async function productFetch() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/search?q=phone"
    );
    const data = await response.json();

    if (data && data.products) {
        renderProductItem(data.products);
    //   productArray.push(data.products);
    }
  } catch (err) {
    console.log("something wring happened");
  }
}

productFetch()
          

function renderProductItem(prodItem){

     prodItem.map(proItem => productWrapper.innerHTML += `
            

            <div class="product__card">
                <div class="details">
                    <h1 class="pname">${proItem.title}</h1>
                    <img src="${proItem.thumbnail}" alt="">
                    <p class="descript">${proItem.description}</p>
                    <p class="price">${proItem.price}</p>
                </div>
                <div class="action">
                    <button onclick="addrenderCarItems(${proItem.id})" class="add">add</button>

                </div>
             

            </div> 
       
        
        
        `)

        productArray.push(...prodItem)

}

const cart__menu = document.querySelector('.cart')
const cart__close = document.querySelector('.close__cart')
const cart__container = document.querySelector('.cart__container')
const cart__items__wrapper = document.querySelector('.cart__items')
let unitNumber = 1

cart__menu.addEventListener('click', ()=>{
    cart__container.classList.toggle('active')

})

cart__close.addEventListener('click', ()=>{
    cart__container.classList.remove('active')

})

product__btn.forEach(button=>{
    button.addEventListener('click', ()=>{
        console.log('you clicked me')
    })
})



function addrenderCarItems(id){
   if(productCart.some(item => item.id === id)){
    alert('alread add')
   }else{
    const  itemPro = productArray.find(item => item.id === id)
    productCart.push({...itemPro, unit : 1})
    renderCart()
  

   }

}

  


function renderCart(){
    cart__items__wrapper.innerHTML = ""

    productCart.map(item => 
        cart__items__wrapper.innerHTML += `

          <div class="cart__items__card">
                        <div class="products__details">
                            <img src="${item.thumbnail}" alt="image">
                            <div class="paname__descrip">
                                <h1>${item.title}</h1>
                                <p>${item.price}</p>
                                <div class="quantity">
                                    <i>    <box-icon onclick="decreasing(${item.id})" id="unitDecrease" name='left-arrow-alt' ></box-icon></i>
                                
                                    <span>${item.unit}</span>
                                    <i>  <box-icon onclick="increasing(${item.id})" id="unitIncrease" name='right-arrow-alt' ></box-icon></i>
                                 

                                </div>
                            </div>

                        </div>
                        <div class="cart__pro__action">
                            <button onclick="deletingCartItem(${item.id})" class="delete__this">Delete</button>
                            <button>store</button>
                           
                        </div>
                    </div>
        
        `
        
        )

        updatingCart()
    
}



function deletingCartItem(id){

   productCart = productCart.filter(item =>item.id !==id )

   renderCart()
}
function decreasing(id){
    productCart.forEach(item=>{
        if(item.id === id){
            console.log('yooo')
           item.unit--
           console.log(item.unit)
            renderCart()
        }

    })

}

function increasing(id){
  
        productCart.forEach(item=>{
            if(item.id === id){
                item.unit++
                console.log(item.unit)
                renderCart()

            }
    
        })
        
  

}
const itemValueone = document.querySelector('.itemValus')
const itemValuetwo = document.querySelector('.itemValue')




function updatingCart(){
    const subTotal = document.querySelector('.stotal')
const taxFee = document.querySelector('.tTotal')
const deliverFee = document.querySelector('.dfees')
const grandTotal = document.querySelector('.grandTotal')
const numberOfItems = document.querySelector('.order-numbers')


    let TotalPrice = 0; let unitValue = 0 ;
    let tax = 0; dFee = 0;
    let gTotal = 0

    productCart.forEach(item =>{
         TotalPrice += item.price * item.unit
        unitValue +=item.unit
        tax += (1/100) *TotalPrice
        dFee += (2/100) * TotalPrice
        gTotal += TotalPrice + tax + dFee


    })

    itemValueone.textContent = `${unitValue} items`
    itemValuetwo.textContent=` ${unitValue} items` 
    numberOfItems.textContent = `${unitValue}`
    subTotal.textContent = `Sub total $${TotalPrice.toFixed(2)}`
    taxFee.textContent =  `Tax $${tax.toFixed(2)}`
    deliverFee.textContent=`Deliver fee $${dFee.toFixed(2)}`
    grandTotal.textContent=`Grand Total $${gTotal.toFixed(2)}`

}


const traditioPayIcon = document.querySelector('.money')
const traditioPayContainer = document.querySelector('.traditio__pay__container')
const traditioPayCloseBtn = document.querySelector('.pay__close__btn')

traditioPayIcon.addEventListener('click', ()=>{
    traditioPayContainer.classList.add('active')
})
traditioPayCloseBtn.addEventListener('click', ()=>{
    traditioPayContainer.classList.remove('active')
})




const orderSummaryInfor = document.querySelector('.place__order__container')
const chechOutBtn = document.querySelector('.check__out')
const shipmentProduct = document.querySelector('.product__list__details')





chechOutBtn.addEventListener('click', ()=>{
    cart__container.classList.remove('active')
 orderSummaryInfor.classList.add('active')
 renderingProductSummary()
})

orderSummaryInfor.addEventListener('click', (e)=>{
    if(e.target.className === 'back__btn'){
        orderSummaryInfor.classList.remove('active')

    }

})
   



function renderingProductSummary() {
  shipmentProduct.innerHTML = " ";

  productCart.map(
    (shipItem) =>
      (shipmentProduct.innerHTML += `
         <li>
                            <div class="producte">
                                <img src="${shipItem.images}">
                            <div class="prd_infor">
                                <h1>${shipItem.title}</h1>
                                <p>${shipItem.description}</p>
                                <h1>${shipItem.price}</h1>
                            </div>
                            </div>
                            
                            <p class="get__it__by">Get it by <span>Wed, july 17</span></p>
                           
                        </li>
        
        `)
        
  );
  

  updatingShipmentSimmary();
}

let orderData = {}

function updatingShipmentSimmary() {

  const subTota = document.querySelector(".subtt");
  const shippingFare = document.querySelector(".shiping");
  const overallTotal = document.querySelector(".overall__total");
  const unitValuess = document.querySelector(".itemValuess");
  const uniteValue = document.querySelector(".itemUnites");
  const totalFinal = document.querySelector(".totalFinnal");


  let subTotal = 0;
  let unitValue = 0;
  let VAT = 0;
  let shippingFee = 0;
  let Total = 0;

 

  productCart.forEach((item) => {
    subTotal += item.price * item.unit;
    unitValue += item.unit;
    VAT += (1 / 100) * subTotal;
    shippingFee += (2 / 100) * subTotal;
    Total += subTotal + VAT + shippingFee;
  
  }
 


);

  subTota.textContent = `$${subTotal.toFixed(2)}`;
  shippingFare.textContent = `$${shippingFee.toFixed(2)}`;
  overallTotal.textContent = `$${Total.toFixed(2)}`;
  totalFinal.textContent = `$${Total.toFixed(2)}`;

  unitValuess.textContent = `${unitValue} of ${unitValue} (${unitValue} items)`;
  uniteValue.textContent = `${unitValue} items`;


}


const selectPayBtn = document.querySelector('.selectPaymentBtn')

selectPayBtn.addEventListener('click',  ()=>{
    orderSummaryInfor.classList.remove('active')
    
 
    updatesendingorder()
    sendingOder()
  
    
 
})






 
const orderlist__info = document.querySelector('.orders__arrays')
let orderRoom = []
let orderUniqId = 0
console.log(orderRoom)

function updatesendingorder(){
   let  TotalPrice = 0; let  unitValue =0;
   let tax = 0; let dFee = 0; let gTotal = 0;


    productCart.forEach(item =>{
         TotalPrice += item.price * item.unit
        unitValue +=item.unit
        tax += (1/100) *TotalPrice
        dFee += (2/100) * TotalPrice
        gTotal += TotalPrice + tax + dFee


    })

  const oderValues = {
     orderId :12345,
     totals : gTotal.toFixed(2),
     unitident: orderUniqId +=1,

  }
  orderRoom.push({...oderValues})

}




function  sendingOder(){
    orderlist__info.innerHTML = " "
    orderRoom.map(item =>
          orderlist__info.innerHTML += `
                     <tr>
                            <td>${item.orderId}${item.unitident}</td>
                            <td>12-07-2024</td>
                            <td>Jomba mazamir</td>
                            <td>05674556</td>
                            <td>4655 kamis</td>
                            <td>${item.totals}</td>
                            <td><button onclick="displayOrderDetails(${item.orderId})" class="view">view</button></td>
                           </tr>
                
        `)} 

        const order__checked__display = document.querySelector('.order__list__display')
        const order__checkded__summary = document.querySelector('.order__display__top')

        function displayOrderDetails(){
            newOderDisplay.classList.remove('active')
           
            OrderInfoDisplay.classList.add('active')
            displayChechedSummary()
          

        }
        


          function displayChechedSummary(id){
            if(orderRoom.some(item => item.orderId === id)){
                return
            }else{
                orderRoom.forEach(item => order__checkded__summary.innerHTML += `
                    <div class="order__display__top__left">
                            <div class="cardd">
                                <h1> Id:<span>#${item.orderId}${item.unitident}</span></h1>
                                <h1>Created on: <span>12-07-2924</span></h1>
                            </div>
                            <div class="cardd">
                                <h1>Updated on: <span>12-07-2924</span></h1>
                                <h1>Status:<span>Completed</span>
                                </h1>
    
                            </div>
                        
    
                        </div>
                        <div class="order__display__top__right">
                            <div class="cardd">
                                <h1>Item: <span>6</span></h1>
                                <h1>Payment: <span>Visa</span></h1>
                            </div>
                            <div class="cardd">
                                <h1>Total <span>$${item.totals}</span></h1>
                            </div>
                            
                        </div>
                    
                    `)
                    updatesendingorder()

            }

          
          }






        function renderingOrderChecked(ordercheck){

            ordercheck.forEach(order =>  order__checked__display.innerHTML += `
                
                   
                        <table>
                            <thead>
                                <tr>
                                    <td>order Id</td>
                                    <td>Item Details</td>
                                    <td>Quanity</td>
                                    <td>Unit Price</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td>1223993</td>
                                    <td>I phone 13 pro</td>
                                    <td>2</td>
                                    <td>$2344</td>
                                    <td> $2445</td>
                                </tr>
                              
                              

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td>Grand Total</td>
                                    <td>45</td>
                                    <td>$2344</td>
                                    <td> $2445</td>
                                </tr>

                            </tfoot>
                        </table> 
                
                `)

        }



        function storeData(){
            localStorage.setItem('info', customerForm.innerHTML)


        }
        function showStoredData(){
       

            customerForm.innerHTML = localStorage.getItem('info')
         

           


        }
        showStoredData()



        const nums = [1,2,3,4,5,6,7]
     
       

        const num = nums.map(no => parseInt(no, 10))
        console.log(num)
  