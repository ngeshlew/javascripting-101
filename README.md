<article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-javascripting" class="anchor" href="#javascripting" aria-hidden="true"><span class="octicon octicon-link"></span></a>JAVASCRIPTING 101</h1>
<p>Author: <a href="https://github.com/sethvincent" target="_blank">Seth Vincent</a></p>
<blockquote>
<p>Learn JavaScript by adventuring around in the terminal.  </p>

<p><em>Looking for more interactive tutorials like this? Go to <a href="http://nodeschool.io">nodeschool.io</a>.</em></p>
</blockquote>

<h2><a id="user-content-install-nodejs" class="anchor" href="#install-nodejs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Install Node.js</h2>

<p>Make sure Node.js is installed on your computer.</p>

<p>Install it from <a href="http://nodejs.org/download">nodejs.org/download</a></p>

<p>On Windows and using v4 or v5 of Node.js? Make sure you are using at least 5.1.0, which provides a fix for a bug on Windows where you can't choose items in the menu.</p>

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

<article class="markdown-body entry-content" itemprop="mainContentOfPage"><h3>How to Test Using Jest</h3><div><p>Consider a scenario where you want to test the following <code>sum.js</code> file:</p><div class="prism language-javascript"><span class="token comment" spellcheck="true">// sum.js
</span><span class="token keyword">function</span> <span class="token function">sum<span class="token punctuation">(</span></span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value1 <span class="token operator">+</span> value2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> sum<span class="token punctuation">;</span></div><p>We can get up and running with the following 4 steps:</p><ol><li><p>Create a directory <code>__tests__/</code> with a file <code>sum-test.js</code></p><div class="prism language-javascript"><span class="token comment" spellcheck="true">// __tests__/sum-test.js
</span>jest<span class="token punctuation">.</span><span class="token function">dontMock<span class="token punctuation">(</span></span><span class="token string">'../sum'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">describe<span class="token punctuation">(</span></span><span class="token string">'sum'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">it<span class="token punctuation">(</span></span><span class="token string">'adds 1 + 2 to equal 3'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'../sum'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">expect<span class="token punctuation">(</span></span><span class="token function">sum<span class="token punctuation">(</span></span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe<span class="token punctuation">(</span></span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></div></li><li><p>Run <code>npm install jest-cli --save-dev</code></p><p> Jest uses ES2015 features and requires a Node.js version of at least 4.0.0
 to run.</p></li><li><p>Add the following to your <code>package.json</code></p><div class="prism language-javascript"><span class="token punctuation">{</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
   <span class="token string">"test"</span><span class="token punctuation">:</span> <span class="token string">"jest"</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span></div></li><li><p>Run <code>npm test</code></p><div class="prism language-javascript"><span class="token punctuation">[</span>PASS<span class="token punctuation">]</span> __tests__<span class="token operator">/</span>sum<span class="token operator">-</span>test<span class="token punctuation">.</span>js <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>015s<span class="token punctuation">)</span></div></li><li><p>Use the <code>--watch</code> option</p><div class="prism language-javascript">npm test <span class="token operator">--</span> <span class="token operator">--</span>watch</div></li></ol><p>This runs all test initially. To skip the initial test, add <code>skip</code> as a value:</p><div class="prism language-javascript">  npm test <span class="token operator">--</span> <span class="token operator">--</span>watch<span class="token operator">=</span>skip</div></div></article>