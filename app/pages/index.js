var editor = require(process.cwd() + '/index.js')

module.exports = async function ($) {
  return /* HTML */ `<textarea id="editor"></textarea>
    <script>
      window.cm5 = ${editor}
      window.editor = cm5({ mode: 'md' })
      window.editor.focus()
    </script>`
}
