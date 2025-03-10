import { readFile } from 'fs'
import fg from 'fast-glob'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import postcssClean from 'postcss-clean'
import { writeFileRecursive, copyFileRecursive, toAbsolute } from './utils'

function transform(input: string) {
  const outDir = input.replace(/\/src\//, '/lib/').replace(/\.ts$/, '.js')

  if (input.endsWith('.css')) {
    readFile(input, (err, css) => {
      if (err) return console.error(err)
      postcss([
        postcssImport,
        postcssPresetEnv({
          stage: 1,
          importFrom: [
            toAbsolute('../node_modules/element-plus/theme-chalk/el-var.css'),
            toAbsolute('../src/styles/vars.css'),
          ],
        }),
        autoprefixer,
        postcssClean,
      ])
        .process(css, { from: input, to: outDir })
        .then((result) => {
          writeFileRecursive(outDir, result.css)
        })
    })
  } else {
    copyFileRecursive(input, outDir)
  }
}

(() => {
  fg.sync(toAbsolute('../src/styles/*')).map(transform)
  console.log('build-styles done')
})()
