<h1>Software Engineer Challenge (Frontend)</h1>
<h2>Introduction</h2>
Bigblue integrates with leading e-commerce CMS such as Shopify, which allows us to offer features that our merchants can plug on their e-shop. In this project, we want to integrate a map to the checkout of an e-shop, so that pick-up points are displayed to end-customers and the delivery address is autocompleted when selecting one of them.
<h2>Guidelines</h2>
<ul>
<li>We value a clean, simple working solution. Some code is already provided, so that you just have to write over it.</li>
<li>The project must be submitted as a git repository (github, bitbucket, gitlab). Repository must avoid containing the words <code>bigblue</code> and <code>challenge</code>.
<li>Having unit tests is a strong bonus</li>
</ul>
<h2>The project</h2>
The current codebase sets up a React app using the <i>Next.js</i> framework & <i>Ant Design</i> library. It's composed of:
<ul>
<li>a <code>components</code> folder  which contains the React components</li>
<li>a <code>pages</code> folder for creating React pages (<a href="https://nextjs.org/learn/basics/navigate-between-pages">Navigation in Next.js</a>). There are 2 pages in the app:
<ul>
<li>the shop catalog to select the products to be ordered</li>
<li>the checkout that displays the possible pick-up points and allow to create an order</li>
</ul>
</li>
<li>a <code>pages/api</code> folder exposes API routes to list products and pick-up points & create a new order (<a href="https://nextjs.org/docs/api-routes/introduction">API Routes</a>)</li>
<li>some configuration files </li>
</ul>
<h4>Setup</h4>
<ul>
<li>Install node modules: <code>npm install</code> </li>
<li>Start the app: <code>npm run dev</code></li>
</ul>
<h4>Useful resources</h4>
<ul>
<li>Next.js documentation: <a href="https://nextjs.org/docs">https://nextjs.org/docs</a></li>
<li>Next.js interactive tutorial: <a href="https://nextjs.org/learn">https://nextjs.org/learn</a></li>
<li>Ant Design components: <a href="https://ant.design/components/overview">https://ant.design/components/overview</a></li>
</ul>
<h2>Missions</h2>
⚠️ Download the images to display them entirely:
<ul>
<li><a href="./doc/shop.png">Shop wireframe</a></li>
<li><a href="./doc/checkout.png">Checkout wireframe</a></br>
</ul>
<h4>E-shop improvement</h4>
The goal here is to complete the e-shop provided, using data provided by the API routes.
You can add any UX/UI improvements you consider, but we are going to focus on the requested features:
<ul></ul>
On the catalog
<ul>
<li>The customer can add/remove products from the cart</li>
<li>The total price of the cart must be displayed in the header</li>
</ul>
On the checkout
<ul>
<li>A summary of the order is displayed</li>
<li>The order can be submitted</li>
</ul>
When in doubt, act as a product owner.
<h4>Map integration</h4>
A map showing the different pick-up points is to be displayed on the right side of the checkout page.
<ul></ul>
By clicking on a pick-up marker
<ul>
<li>A pop-over appears and displays info about the pick-up point</li>
<li>The address is automatically filled with pick-up one</li>
</ul>
Any map API service can be used (Google Map, Mapbox...)
<br /><br />
We are available if you have any question :)<br/>
<b>Good luck 🚀</b>
