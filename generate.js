const path = require('path')
const { execute } = require('njar')
const fs = require('fs');
async function main() {
  const jarPath = path.join(__dirname, './apktool.jar')
  const result = await execute(jarPath, ['build', 'src', '-o', 'app.apk'])
  console.log(result) // '6'
}

main()
