# minBlock.js
Is a Pure Javascript Canvas Implementation of Matrix Grid ( Primary Application was to Generate Github Like Random Avatar using minBlock.js or Pixel Pattern)



#Check Out Demo
http://argunner.github.io/minBlock.js/

#Usage
Getting Started
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/argunner/minBlock.js/master/index.js"></script>
```

#Usage

####Regular
```js
  init('canvasId',time);
  //here "time" defines the Delay between two transitions
````

####Fixed Color
```js
  init('canvasID',time,true,'colorPrimary','colorSecondary');

```

####Pause ( This'll make sure that Matrix Does Not Changes In a Loop )
```js
  init('canvasID',time,false,'init will ignore this','init will ignore this',true);

  ```

#Not Yet Implemented
1. Making it Sensitive for nxn Matrix
2. ~~Simplifying Arguments To JSON format~~
3. Minifying the source

