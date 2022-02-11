# Next Amazona

Build ECommerce Website Like Amazon by Next.js

- [Demo Website Coming Soon](https://)

## What you will learn

- NextJS basics like setting up project, navigating between pages and data fetching
- NextJS advanced topics like dynamic routing, image optimization,  SSG and SSR
- MaterialUI framework to build responsive website using custom theme, animation and carousel
- ReactJS including decomposing components, context API and hooks
- Next Connect package to build backend API
- MongoDB and Mongoose to save and retrieve data like products, orders and users
- PayPal developer api to make online payment
- Deploy web applications on servers like Vercel and Netlify

## Full Course

[learn building this ecommerce website on udemy with 90% discount]: (https://www.udemy.com/course/nextjs-ecommerce)

## Run it Locally

```bash
npx create-next-app next-amazona
cd next-amazona
npm install
npm run dev
Open (http://localhost:3000/api/seed)
Open (http://localhost:3000)
```

## Lessons Completed

1. Introduction
   - [x] 1. What you will learn
   - [x] 2. What you will build
   - [x] 3. What Packages you will use
2. Install Tools
   - [x] 1. VS Code
   - [x] 2. Chrome
   - [x] 3. Node.js
   - [x] 4. MongoDB
3. Create Next App
   - [x] 1. npx create-next-app
   - [x] 2. add layout component
   - [x] 3. add header, main and footer
4. Add Styles
   - [x] 1. add css to header, main and footer
5. Fix SSR Issue on MaterialUI
   - [x] 1. add \_documents.js
   - [x] 2. add code to fix styling issue
6. List Products
   - [x] 1. add data.js
   - [x] 2. add images
   - [x] 3. render products
7. Add header links
   - [] 1. Add cart and login link
   - [] 2. use next/link and mui/link
   - [] 3. add css classes for header links
8. Route Product Details Page
   - [] 1. Make Product cards linkable
   - [] 2. Create /product/[slug] route
   - [] 3. find product based on slug
9. Create Product Details Page
   - [] 1. Create 3 columns
   - [] 2. show image in first column
   - [] 3. show product info in second column
   - [] 4. show add to cart action on third column
   - [] 5. add styles
     10 Add MaterialUI Theme
   - [] 1. create theme
   - [] 2. use theme provider
   - [] 3. add h1 and h2 styles
   - [] 4. set theme colors
10. Create Application Context
    - [] 1. define context and reducer
    - [] 2. set darkMode flag
    - [] 3. create store provider
    - [] 4. use it on layout
11. Connect To MongoDB
    - [] 1. install mongodb
    - [] 2. install mongoose
    - [] 3. define connect and disconnect
    - [] 4. use it in the api
12. Create Products API
    - [] 1. create product model
    - [] 2. seed sample data
    - [] 3. create /api/products/index.js
    - [] 4. create product api
13. Fetch Products From API
    - [] 1. use getServerSideProps()
    - [] 2. get product from db
    - [] 3. return data as props
    - [] 4. use it in product screen too
14. Implement Add to cart
    - [] 1. define cart in context
    - [] 2. dispatch add to cart action
    - [] 3. set click event handler for button
15. Create Cart Screen
    - [] 1. create cart.js
    - [] 2. redirect to cart screen
    - [] 3. use context to get cart items
    - [] 4. list items in cart items
16. Use Dynamic Import In Cart Screen
    - [] 1. Use next/dynamic
    - [] 2. Wrap cart in dynamic with out ssr
17. Update Remove Items In Cart
    - []1. Implement onChange for Select
    - [] 2. Show notification by notistack
    - [] 3. implement delete button handler
18. Create Login Page
    - [] 1. create form
    - [] 2. add email and password field
    - [] 3. add login button
    - [] 4. style form
19. Create Sample Users
    - [] 1. create user model
    - [] 2. add sample user in seed api
20. Build Login API 3. use jsonwebtoken to sign token 4. implement login api
21. Complete Login Page
    - [] 1. handle form submission
    - [] 2. add userInfo to context
    - [] 3. save userInfo in cookies
    - [] 4. show user name in nav bar using menu
22. Create Register Page
    - [] 1. create form
    - [] 2. implement backend api
    - [] 3. redirect user to redirect page
23. Login and Register Form Validation
    - [] 1. install react-hook-form
    - [] 2. change input to controller
    - [] 3. use notistack to show errors
24. Create Shipping Page
25. create form
26. add address fields
27. save address in context
28. Create Payment Page
    - [] 1. create form
    - [] 2. add radio button
    - [] 3. save method in context
29. Create Place Order Page
    - [] 1. display order info
    - [] 2. show order summary
    - [] 3. add place order button
30. Implement Place Order Action
    - [] 1. create click handler
    - [] 2. send ajax request
    - [] 3. clear cart
    - [] 4. redirect to order screen
    - [] 5. create backend api
31. Create Order Details Page
    - [] 1. create api to order info
    - [] 2. create payment, shipping and items
    - [] 3. create order summary
32. Pay Order By PayPal
    - [] 1. install paypal button
    - [] 2. use it in order screen
    - [] 3. implement pay order api
33. Display Orders History
    - [] 1. create orders api
    - [] 2. show orders in profile screen
34. Update User Profile
35. create profile screen
36. create update profile api
37. Create Admin Dashboard
38. Create Admin Menu
39. Add Admin Auth Middleware
40. Implement admin summary api
41. List Orders For Admin
    - [] 1. fix isAdmin middleware
    - [] 2. create orders page
    - [] 3. create orders api
    - [] 4. use api in page
42. Deliver Order For Admin
    - [] 1. create deliver api
    - [] 2. add deliver button
    - [] 3. implement click handler
43. List Products For Admin
    - [] 1. create products page
    - [] 2. create products api
    - [] 3. use api in page
44. Create Product Edit Page
    - [] 1. create edit page
    - [] 2. create api for product
    - [] 3. show product data in form
45. Update Product
    - [] 1. create form submit handler
    - [] 2. create backend api for update
46. Upload Product Image
    - [] 1. create cloudinary account
    - [] 2. get cloudinary keys
    - [] 3. create upload api
    - [] 4. upload files in edit page
47. Create And Delete Products
    - [] 1. add create product button
    - [] 2. build new product api
    - [] 3. add handler for delete
    - [] 4. implement delete api
48. List Users For Admin
    - [] 1. create users page
    - [] 2. create users api
    - [] 3. use api in page
49. Create User Edit Page
    - [] 1. create edit page
    - [] 2. create api for user
    - [] 3. show user data in form
50. Deploy on Vercel
    - [] 1. create vercel account
    - [] 2. connect to github
    - [] 3. create altas mongodb db
    - [] 4. push code to github
51. Review Products
    - [] 1. add reviews model
    - [] 2. create api for reviews
    - [] 3. create review form
    - [] 4. show reviews on home screen
52. Create Sidebar
    - [] 1. add drawer
    - [] 2. list categories
    - [] 3. redirect to search screen
53. Create Search Box
    - [] 1. add form
    - [] 2. handle form submit
    - [] 3. redirect to search screen
54. Create Search Page
    - [] 1. create filters
    - [] 2. list products
    - [] 3. show filters
55. Add Carousel
    - [] 1. create featured products
    - [] 2. feed carousel data
    - [] 3. show popular products
56. Choose Location on Map
    - [] 1. add google map
    - [] 2. create map screen
    - [] 3. choose location
    - [] 4. show in order screen
