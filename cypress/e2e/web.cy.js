import PageWeb from "./pageObjects/PageWeb"

beforeEach(() => {
    PageWeb.visit();
 })

it ('e2e Swag Labs', () => {
    PageWeb.EnterUsername("standard_user")
    PageWeb.EnterPassword("secret_sauce")
    PageWeb.ClickButtonSend()
    PageWeb.AddProduct("flaceeJacket")
    PageWeb.viewCart()
    PageWeb.goCheckout()
    PageWeb.enterCheckoutData('David', 'Rivera', '1110011')
    PageWeb.continueCheckout()
    PageWeb.viewSummary()
    PageWeb.clickFinishBuy()
    PageWeb.viewConfirmOrder()
})


