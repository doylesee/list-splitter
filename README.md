<h2>Usage</h2>
Include the CSS and JS files
<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;list-splitter/list-splitter.css&quot; /&gt;
&lt;script src=&quot;list-splitter/list-splitter.js&quot;&gt;&lt;/script&gt;</pre></code>
			
HTML markup
<pre><code>&lt;ul&gt;
	&lt;li&gt;Item 1&lt;/li&gt;
	&lt;li&gt;Item 2&lt;/li&gt;
	&lt;li&gt;Item 3&lt;/li&gt;
	&lt;li&gt;Item 4&lt;/li&gt;
	&lt;li&gt;Item 5&lt;/li&gt;
	&lt;li&gt;Item 6&lt;/li&gt;
	&lt;li&gt;Item 7&lt;/li&gt;
	&lt;li&gt;Item 8&lt;/li&gt;
	&lt;li&gt;Item 9&lt;/li&gt;
	&lt;li&gt;Item 10&lt;/li&gt;
&lt;/ul&gt;</pre></code>

Initialize your list splitter

Where <i>n</i> is the number of columns you want

<pre><code>
$('ul').listSplitter(n);
</pre></code>
