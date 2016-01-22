<article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-javascripting" class="anchor" href="#javascripting" aria-hidden="true"><span class="octicon octicon-link"></span></a>JAVASCRIPTING 101</h1>
<p>Author: <a href="https://github.com/sethvincent" target="_blank">Seth Vincent</a></p>
<blockquote>
<p>Learn JavaScript by adventuring around in the terminal.  </p>

<p><em>Looking for more interactive tutorials like this? Go to <a href="http://nodeschool.io">nodeschool.io</a>.</em></p>
</blockquote>

<h2><a id="user-content-install-nodejs" class="anchor" href="#install-nodejs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Install Node.js</h2>

<p>Make sure Node.js is installed on your computer.</p>

<p>Install it from <a href="http://nodejs.org/download">nodejs.org/download</a></p>


<h3><a id="user-content-install-javascripting-with-npm" class="anchor" href="#install-javascripting-with-npm" aria-hidden="true"><span class="octicon octicon-link"></span></a>Install <code>javascripting</code> with <code>npm</code></h3>

<p>Open your terminal and run this command:</p>

<pre><code>npm install --global javascripting
</code></pre>

<p>The <code>--global</code> option installs this module globally so that you can run it as a command in your terminal.</p>

<h4><a id="user-content-having-issues-with-installation" class="anchor" href="#having-issues-with-installation" aria-hidden="true"><span class="octicon octicon-link"></span></a>Having issues with installation?</h4>

<p>If you get an <code>EACCESS</code> error, the simplest way to fix this is to rerun the command, prefixed with sudo:</p>

<pre><code>sudo npm install --global javascripting
</code></pre>

<p>You can also fix the permissions so that you don't have to use <code>sudo</code>. Take a look at this npm documentation:
<a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions">https://docs.npmjs.com/getting-started/fixing-npm-permissions</a></p>

<h2><a id="user-content-run-the-workshop" class="anchor" href="#run-the-workshop" aria-hidden="true"><span class="octicon octicon-link"></span></a>Run the workshop</h2>

<p>Open your terminal and run the following command:</p>

<pre><code>javascripting
</code></pre>

<p>You'll see the menu:</p>

![javascripting-101](https://cloud.githubusercontent.com/assets/4710827/12478934/22f0c86a-c049-11e5-8967-4783b07be15b.png)


<p>Navigate the menu with the up &amp; down arrow keys. </p>

<p>Choose a challenge by hitting enter.</p>

<p>You can use any editor you like. </p>

<p><a href="http://atom.io">atom</a> or <a href="http://brackets.io/">brackets</a> or <a href="www.sublimetext.com/">sublime text</a>are all good options.</p>

<h2><a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><span class="octicon octicon-link"></span></a>License</h2>

<p>MIT</p>
</article>

<article class="markdown-body entry-content" itemprop="mainContentOfPage"><h3>How to Test Using Jest</h3><div><p>Consider a scenario where you want to test the following <code>sum.js</code> file:</p>
<pre>// sum.js
function sum (value1,value2 ){
	return  value1 + value2;
}
module.exports = sum;
</pre>
<p>We can get up and running with the following 4 steps:</p><ol><li><p>Create a directory <code>__tests__/</code> with a file <code>sum-test.js</code></p>
<pre>// __tests__/sum-test.js
jest.dontMock ('../sum');

describe('sum',function()
{	it('adds 1 + 2 to equal 3', function(){
		var sum =require('../sum');
		expect(sum(1,2)).toBe(3);});});
</pre>
<li><p>Run <code>npm install jest-cli --save-dev</code></p><p> Jest uses ES2015 features and requires a Node.js version of at least 4.0.0
 to run.</p></li><li><p>Add the following to your <code>package.json</code></p>
 <pre>{..."scripts":
 	{"test":"jest"}
 	<...
 	}</pre>
 	</li>
 <p>Run <code>npm test</code></p>
 <pre>[PASS] __tests__/sum-test.js (0.015s)</pre></li>
 <li><p>Use the <code>--watch</code> option</p>
 <pre>npm test -- --watch
 </pre>
 </li></ol><p>This runs all test initially. To skip the initial test, add <code>skip</code> as a value:</p>
 <pre> npm test -- --watch=skip
 </pre></article>