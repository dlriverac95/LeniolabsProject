class PageWeb{
    
    static visit(){
       cy.visit("https://www.saucedemo.com/")
    }

    static EnterUsername(username){
        cy.get('input[id="user-name"]').type(username)
    }
    
    static EnterPassword(password){
        cy.get('input[id="password"]').type(password)
    }

    static ClickButtonSend(){
        cy.get('input[id="login-button"]').click()
    }

    static dicProduct = {
        backpack : "-labs-backpack",
        bikeLight : "-labs-bike-light",
        boltTShirt : "-labs-bolt-t-shirt",
        flaceeJacket : "-labs-fleece-jacket",
        labsOnesie : "-labs-onesie"
    }

    static AddProduct(product){
        const dataId = this.dicProduct[product]
        cy.get(`button[data-test="add-to-cart-sauce${dataId}`).click()
    }
    
    static viewCart(){
        cy.get('a[class="shopping_cart_link"]').click()
        cy.wait(2000)
    }

    static goCheckout(){
        cy.get('button[data-test="checkout"]').click()
    }

    static enterCheckoutData(firstName, lastName, postalCode){
        cy.get('input[data-test="firstName"]').type(firstName)
        cy.get('input[data-test="lastName"]').type(lastName)
        cy.get('input[data-test="postalCode"]').type(postalCode)
    }

    static continueCheckout(){
        cy.get('input[data-test="continue"]').click()
    }

    static viewSummary(){
        cy.contains("Checkout: Overview")
    }

    static clickFinishBuy(){
        cy.get('button[data-test="finish"]').click()
    }

    static viewConfirmOrder(){
        cy.contains("Thank you for your order!")
    }
}

export default PageWeb