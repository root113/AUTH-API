# AUTH-API
<p>An authentication API that can perform register and login operations with get and post methods. The aim is to learn how to hide passwords inside database and using tokens for sessions to login without users being asked with credentials everytime they perform an operation. For these useful tricks there are some dependencies that you need to install. They are not mandatory, optional, but since regarding the purpose of this API, these packages will not be listed under <b>Optional dependencies</b> list.</p>

<h3>Before you start</h3>
<p>Initially, clone this repository. Then, under the same directory you need to initialize npm and create <code>package.json</code> file with:</p>
<pre>npm init</pre>

<h3>Required dependencies</h3>
<ul>
  <li>express</li>
  <li>nodemon</li>
  <li>mongoose</li>
  <li>joi</li>
  <li>bcryptjs</li>
  <li>jsonwebtoken</li>
</ul>

<h3>Optional dependencies</h3>
<ul>
  <li>dotenv</li>
</ul>

<h3>Installation</h3>
<p>Follow these commands:</p>
<pre>
npm install express
npm install --save-dev nodemon
npm install mongoose
npm install @hapi/joi
npm install bcryptjs
npm install jsonwebtoken
//optional
npm install dotenv
</pre>
<b>Note:</b><p>There are some parts inside source code that uses variables from <code>.env</code> file which has not pushed to this repository due to privacy. Those piece of codes have comments for explanation about what is going on on that specific line. Write your own scripts that best suits your needs to those parts.</p>
