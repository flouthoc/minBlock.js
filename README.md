# minBlock.js
A pure javascript implementation of Matrix Grid ( used to generate Github-like random avatars)


#Demo
http://flouthoc.github.io/minBlock.js/

#Usage
Getting Started
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/flouthoc/minBlock.js/master/index.js"></script>
```

#Usage

####Random Color
<pre><code>
  demo = new minBlock({
        divId          : canvasID,
        time           : timefortransition,
        numBlocks      : number of blocks per edge
        randomColor    : true,
        colorPrimary   : PrimaryColor,
        colorSecondary : SecondaryColor'
      });
  //"time" defines the Delay between two transitions
</code></pre>

####Fixed Color
<pre><code>
  demo = new minBlock({
        divId          : canvasID,
        time           : timefortransition,
        numBlocks      : number of blocks per edge
        randomColor    : false,
        colorPrimary   : PrimaryColor,
        colorSecondary : SecondaryColor'
      });
</code></pre>

####Pause
<pre><code>
   demo = new minBlock({
          divId          : CanvasId,
          time           : 300,
          numBlocks      : number of blocks per edge
          randomColor    : true,
          colorPrimary   : primaryColor,
          colorSecondary : secondaryColor,
          pause: true
        });
</code></pre>

#Todos
1. ~~Making it Sensitive for nxn MatrixFF~~ [by @GreenLantern101](https://github.com/GreenLantern101)
2. ~~Simplifying Arguments To JSON format~~ [by @alvaropinot](https://github.com/alvaropinot)
