# cm5
CodeMirror 5 implementation

### Install

```
npm i https://github.com/eldoy/cm5.git
```

### Usage

Require the editor:
```js
var cm5 = require('cm5')
```

Include it on the page and run it:

```html
<textarea id="editor"></textarea>
<script>
  window.cm5 =${cm5}
  window.editor = cm5({ el: '#editor', mode: 'js' })

  // Autofocus
  window.editor.focus()
</script>
```

### License
MIT Licensed. Enjoy!

Created by [Eldøy Projects](https://eldoy.com)
