# minBlock.js
A pure javascript implementation of Matrix Grid (used to generate Github-like random avatars)


## Demo
http://flouthoc.github.io/minBlock.js/

## Usage
#### Getting Started:
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/flouthoc/minBlock.js/master/minBlock.js"></script>
```

Only the option canvasID is required.

```
new minBlock(canvasID: String);
```
or
```
new minBlock({
  blocksPerEdge: Number, // default -> 5
  canvasID: String, // required
  color: {
      primary: String,
      secondary: String
  }, // default -> a pair of random colors
  padding: Number, // default -> 20
  spacing: Number // default -> 0
});
```

#### In Html:
```html
<script type='text/javascript' src='https://raw.githubusercontent.com/flouthoc/minBlock.js/master/minBlock.js'></script>
```

#### Where to put it:
```html
<html>
  <head>
    <script type='text/javascript' src='minBlock.js'></script>
  </head>
  <body>
    <canvas id='myCanvas' width='500' height='500'></canvas>

    <script type='text/javascript'>
      new minBlock('myCanvas');
    </script>
  </body>
</html>
```

#### Working with optional parameters:
```javascript
new minBlock({
  canvasID: 'myCanvas',
  blocksPerEdge: 4,
  color: {
    primary: '#27ae60',
    secondary: '#2ecc71'
  },
  padding: 0,
  spacing: 2
});
```

## Todos
1. ~~Making it Sensitive for nxn MatrixFF~~ [by @GreenLantern101](https://github.com/GreenLantern101)
2. ~~Simplifying Arguments To JSON format~~ [by @alvaropinot](https://github.com/alvaropinot)
