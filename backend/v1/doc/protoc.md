<h1>Setup Protoc</h1>
In order to perform code generation, you will need to install Protoc on your computer.
<h3>============ MacOSX =============</h2>
It is actually very easy, open a command line interface and type <code>brew install protobuf</code>
<h3>============ Ubuntu (Linux) ============</h3>
Find the correct protocol buffers version based on your Linux Distro: <a href="https://github.com/google/protobuf/releases">https://github.com/google/protobuf/releases</a>
<br />
Example with x64:
<ul>
<li>
Make sure you grab the latest version<br />
<code>curl -OL https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip</code>
</li>
<li>
Unzip<br/>
<code>unzip protoc-3.5.1-linux-x86_64.zip -d protoc3</code>
</li>
<li>Move protoc to /usr/local/bin/<br />
<code>sudo mv protoc3/bin/* /usr/local/bin/</code>
<li>
Move protoc3/include to /usr/local/include/<br />
<code>sudo mv protoc3/include/* /usr/local/include/</code>
</li>
<li>
Optional: change owner<br />
<code>sudo chown [user] /usr/local/bin/protoc<br />
sudo chown -R [user] /usr/local/include/google</code>
</li>
</ul>
<h3>============ Windows ============</h3>
<ul>
<li>
Download the latest archive corresponding to your Windows: <a href="https://github.com/google/protobuf/releases">https://github.com/google/protobuf/releases</a>
<br />
Example:
<code>https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-win32.zip</code>
</li>
<li>
Extract all to <code>C:\proto3</code></br>
Your directory structure should now be:<br />
<code>
C:\proto3\bin
</code>
<br/>
<code>
C:\proto3\include
</code>
</li>
<li>
Finally, add <code>C:\proto3\bin</code> to your PATH:
<ol>
<li>
Open the Start Search, type in and click on Edit the system environment variables
</li>
<li>
Click the Environment Variables button.
</li>
<li>
Finally, in the Environment Variables window (as shown below), highlight the Path variable in the Systems Variable section and click the Edit button. Add or modify the path lines with the paths you wish the computer to access.<br />
</li>
</ol>
</li>
</ul>
