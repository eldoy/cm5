var { run, exist } = require('extras')

var appdir = process.argv[2]

function usage(msg) {
  console.log(`\n${msg}\n`)
  console.log('Usage: node scripts/install.js <appdir>\n')
  process.exit()
}

if (!appdir) {
  usage('Appdir is missing.')
}

if (!exist(appdir)) {
  usage('Appdir does not exist.')
}

run(`cp -R app/assets/codemirror ${appdir}/app/assets`)

run(`cp app/assets/scss/editor.scss ${appdir}/app/assets/scss`)

run(`cat app/config/assets.yml`)

console.log(`\n\nManually copy the assets into app/config/assets.yml\n`)
