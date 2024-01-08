# Assignment 3

For this assignment, you will be adding new functionality to your
Homework #3 project.

-   Routing

-   A product list and cart viewer

-   Shared context for handling the user\'s cart

-   Two additional API interactions (load products and save review)

**READ EVERYTHING BEFORE YOU START**

Watch this video for demonstration\...

[[https://nimb.ws/43RpHD]{.underline} (Links to an external
site.)](https://nimb.ws/43RpHD)

Requirements

**Acceptance Criteria**

-   Given initial visit to the site

    -   user is shown a list of products

-   Given the list of products

    -   when \"Product Details\" is clicked

        -   user is redirected to the product details

    -   when \"Add to Cart\" is clicked\"

        -   the product is added to the cart

        -   user is redirected to their cart

-   Given a product detail

    -   the correct product is loaded based on the id in the URL 

    -   when a review is added

        -   the review is permanently saved

    -   when \"Add to Cart\" is clicked

        -   the product is added to the cart

        -   user is redirected to their cart 

-   Given the user\'s cart

    -   each item in cart is displayed with quantity, product name,
        > product price, and a line total

    -   the total of all items in cart is displayed below item table

-   Given any view of the store

    -   when the site logo (name in header) is clicked

        -   user is redirected back to the product list

**File Structure**

The highlighted files are being added with this assignment. [Please do
not deviate from this file structure.]{.underline}

![A screenshot of a computer Description automatically
generated](vertopal_1f779092a72a4c0a809e2c8de755ef33/media/image1.png){width="2.821527777777778in"
height="9.0in"}

**Models**

Two new models are added with this assignment.

**[Cart]{.underline}**

-   items

-   total

**[CartItem]{.underline}**

-   product

-   quantity

-   totalPrice

**API**

**[productsApi]{.underline}**

Add the following methods to productsApi.

  ---------------------------------------------------------------------------------------------------------
  **Function    **Passed      **Return Value**         **Description**       **API Endpoint**
  Name**        Arguments**                                                  
  ------------- ------------- ------------------------ --------------------- ------------------------------
  getProducts   N/A           Promise\<Product\[\]\>   Gets a array of       products/
                                                       products from the API 

  addReview     productId,    Promise\<Review\>        Posts a review for an products/{productId}/reviews
                review                                 existing product to   
                                                       the API               
  ---------------------------------------------------------------------------------------------------------

**Routes**

**[routes]{.underline}**

Your project will need a route array configuration with the following
routes:

  -----------------------------------------------------------------------
  **Path**                                 **Element**
  ---------------------------------------- ------------------------------
  /                                        ProductList

  /products/\[productId\]\*                ProductDetails

  /cart                                    MyCart
  -----------------------------------------------------------------------

*\*- not actual syntax for route parameter*

**Context**

**[CartContext]{.underline}**

CartContext will handle the user\'s cart and be shared across the
application.

Use createContext hook to instantiate the context with an initial value
of undefined.

**[CartContextProvider]{.underline}**

Create a component to encapsulate the CartContext.Provider and manage
the cart state.

This component can be placed in the same file as CartContext.

+----------+-----------------------------------------------------------+
| *        | Encapsulates the CartContext.Provider and manages state   |
| *Usage** | of the cart                                               |
+==========+===========================================================+
| **Loc    | App                                                       |
| ation(s) |                                                           |
| Used**   |                                                           |
+----------+-----------------------------------------------------------+
| *        | children                                                  |
| *Props** |                                                           |
+----------+-----------------------------------------------------------+
| **Cont   | None                                                      |
| ext(s)** |                                                           |
+----------+-----------------------------------------------------------+
| **       | -   cart / setCart                                        |
| State ** |                                                           |
|          |     -   Initial value = { items: \[\], total: 0 }         |
+----------+-----------------------------------------------------------+
| **E      | None                                                      |
| ffects** |                                                           |
+----------+-----------------------------------------------------------+
| *        | -   Add the following method to handle cart updates. This |
| *Logic** |     > will be exposed to the provider instead of setCart. |
|          |                                                           |
|          | ** const addToCart = (product) =\> {**\                   |
|          | **    let \_cart = { \...cart };**\                       |
|          | **    let existing = \_cart.items.find(x =\> x.product.id |
|          | === product.id);**\                                       |
|          | **    if (existing) {**\                                  |
|          | **        existing.quantity += 1;**\                      |
|          | **        existing.totalPrice = existing.product.price    |
|          | \* existing.quantity;**\                                  |
|          | **    } else {**\                                         |
|          | **      \_cart.items.push({ product, quantity: 1,         |
|          | totalPrice: product.price });**\                          |
|          | **    }**                                                 |
|          |                                                           |
|          | **    \_cart.total = \_cart.items.map(x =\>               |
|          | x.totalPrice).reduce((x, y) =\> x + y);**\                |
|          | **    setCart(\_cart);**\                                 |
|          | ** }**                                                    |
+----------+-----------------------------------------------------------+
| **R      | \<CartContext.Provider\>\                                 |
| eturns** |      //TODO: Set value prop of CartContext.Provider\      |
|          |      //TODO: Render children here\                        |
|          | \</CardContext.Provider\>                                 |
+----------+-----------------------------------------------------------+
| *        | -   Value prop of CartContext.Provider should be given {  |
| *Notes** |     > cart, addToCart }. These will be used in various    |
|          |     > components.                                         |
|          |                                                           |
|          | -   Bind children from props inside CardContext.Provider  |
+----------+-----------------------------------------------------------+

**\
New Components**

For this assignment, your store will have the following new components.

**[ProductList]{.underline}**

+----------+-----------------------------------------------------------+
| *        | Displays list of products in store                        |
| *Usage** |                                                           |
+==========+===========================================================+
| **Loc    | Router in App                                             |
| ation(s) |                                                           |
| Used**   |                                                           |
+----------+-----------------------------------------------------------+
| *        | None                                                      |
| *Props** |                                                           |
+----------+-----------------------------------------------------------+
| **Cont   | CartContext                                               |
| ext(s)** |                                                           |
+----------+-----------------------------------------------------------+
| **       | -   products / setProducts                                |
| State ** |                                                           |
+----------+-----------------------------------------------------------+
| **E      | -   On component\'s initial rendering, call getProducts   |
| ffects** |     > in productsApi. When the promise is fulfilled, call |
|          |     > setProducts with value returned.                    |
+----------+-----------------------------------------------------------+
| **R      | -   Nav bar with static breadcrumb                        |
| eturns** |                                                           |
|          | -   Bound list of products presented in cards             |
|          |                                                           |
|          |     -   Product image                                     |
|          |                                                           |
|          |     -   Name                                              |
|          |                                                           |
|          |     -   Price (show in badge)                             |
|          |                                                           |
|          |     -   \"Product Details\" button                        |
|          |                                                           |
|          |     -   \"Add to Cart\" button                            |
+----------+-----------------------------------------------------------+
| *        | -   use the useContext hook to reference the CartContext  |
| *Notes** |                                                           |
|          | -   In the Add to Cart onclick event, pass the product to |
|          |     > addToCart located on cartContext before redirecting |
|          |     > to the cart                                         |
|          |                                                           |
|          | -   Use the Link component or the useNavigate hook to     |
|          |     > handle redirecting when the two buttons are         |
|          |     > clicked.                                            |
+----------+-----------------------------------------------------------+

**[MyCart]{.underline}**

+----------------------+-----------------------------------------------+
| **Usage**            | Displays list of items in user\'s cart        |
+======================+===============================================+
| **Location(s) Used** | Router in App                                 |
+----------------------+-----------------------------------------------+
| **Props**            | None                                          |
+----------------------+-----------------------------------------------+
| **Context(s)**       | CartContext                                   |
+----------------------+-----------------------------------------------+
| **State**            | None                                          |
+----------------------+-----------------------------------------------+
| **Effects**          | None                                          |
+----------------------+-----------------------------------------------+
| **Returns**          | -   Table displaying items in user\'s cart    |
|                      |                                               |
|                      |     -   Quantity                              |
|                      |                                               |
|                      |     -   Name                                  |
|                      |                                               |
|                      |     -   Price                                 |
|                      |                                               |
|                      |     -   Line Total                            |
|                      |                                               |
|                      | -   Total of all items in cart                |
+----------------------+-----------------------------------------------+
| **Notes**            | -   Map over cartContext.cart.items to create |
|                      |     > table rows                              |
|                      |                                               |
|                      |     -   Pay attention to the object structure |
|                      |         > of cart item\                       |
|                      |         > (i.e.: item.product.price,          |
|                      |         > item.totalPrice, etc.)              |
|                      |                                               |
|                      | -   Bind the cart total to cartContext.total  |
+----------------------+-----------------------------------------------+

**\
Component Modifications**

**[App]{.underline}**

-   Update the return value to the following and address TODO notes.\
    > \<CartContextProvider\>\
    >         \<BrowserRouter\>\
    >             // TODO: Style header and make link navigate to
    > Product List\
    >           \<header\>Store\</header\>\
    >             // TODO: Add Routes component here.\
    >             // Inside of Routes, generate individual Route
    > components by mapping over the route constant in routes.jsx.\
    >             // Hint: Use the spread operator to copy all object
    > properties to the mapped component. (i.e.: \<Route
    > {\...x}\>\</Route\>)\
    >         \</BrowserRouter\>\
    >  \</CartContextProvider\>

**[ProductDetails]{.underline}**

-   Replace the hard-coded id passed to getProductById with the
    > parameter located on the route.

    -   Use the useParams hook to get the value.

-   Use the useContext hook to add a reference to CartContext.

-   Add \'Add to Cart\' button and logic

    -   Call addToCart on cartContext

    -   Redirect to cart using Link component or useNavigate hook

-   Update the logic for onReviewAdded to save the new review to the
    > repository.

    -   Call addReview in productsApi with product.id and the new review

    -   When promise is fulfilled, append the new review to product\...\
        >            const \_product = {\...product};\
        >             \_product.reviews.push(x);\
        >             setProduct(\_product);

Styling

Reference
Bootstrap\'s [[website]{.underline}](https://getbootstrap.com/) for
duplicating the styles shown in screenshots and video. 

## Screen Shots

ProductList:

![A screenshot of a product page Description automatically
generated](vertopal_1f779092a72a4c0a809e2c8de755ef33/media/image2.png){width="6.5in"
height="3.911111111111111in"}

ProductDetails:

![A box of food on a website Description automatically
generated](vertopal_1f779092a72a4c0a809e2c8de755ef33/media/image3.png){width="6.5in"
height="3.911111111111111in"}

MyCart:

![A screenshot of a computer Description automatically
generated](vertopal_1f779092a72a4c0a809e2c8de755ef33/media/image4.png){width="6.5in"
height="3.911111111111111in"}

**Good Luck!!!**
