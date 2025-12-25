require('esbuild').build({
  entryPoints: ['tex-linebreak.ts'],
  bundle: true,
  minify: false, // ✅ turn off for debugging
  outfile: 'static/js/tex-linebreak.js',
  target: ['es2017'],
  format: 'iife', // ✅ force global scope (Immediately Invoked Function Expression)
  globalName: 'TexLinebreak' // ✅ accessible as window.TexLinebreak
}).catch(() => process.exit(1));
