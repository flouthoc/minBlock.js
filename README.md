# minBlock.js
Is a Pure Javascript Canvas Implementation of Matrix Grid ( Primary Application was to Generate Github Like Random Avatar using minBlock.js or Pixel Pattern)



#Check Out Demo
http://flouthoc.github.io/minBlock.js/

#Usage
Getting Started
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/flouthoc/minBlock.js/master/index.js"></script>
```

#Usage

####Regular
<pre><code>
  init({
        divId          : canvasID,
        time           : timefortransition,
        randomColor    : true,
        colorPrimary   : PrimaryColor,
        colorSecondary : SecondaryColor'
      });
  //here "time" defines the Delay between two transitions
</code></pre>

####Fixed Color
<pre><code>
  init({
        divId          : canvasID,
        time           : timefortransition,
        randomColor    : false,
        colorPrimary   : PrimaryColor,
        colorSecondary : SecondaryColor'
      });
</code></pre>

####Pause ( This'll make sure that Matrix Does Not Change In a Loop )
<pre><code>
   init({
          divId          : CanvasId,
          time           : 300,
          randomColor    : true,
          colorPrimary   : primaryColor,
          colorSecondary : secondaryColor,
          pause: true
        });
</code></pre>

#Not Yet Implemented
1. Making it Sensitive for nxn Matrix
2. ~~Simplifying Arguments To JSON format~~ [by @alvaropinot](https://github.com/alvaropinot)
