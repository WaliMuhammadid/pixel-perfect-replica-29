const fs = require('fs');
const glob = require('glob'); // wait glob is not built-in, use fs

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') && !file.includes('layout.tsx') && !file.includes('template.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src/app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/import Navbar from "@\/components\/layout\/Navbar";\n?/g, '');
  content = content.replace(/import Footer from "@\/components\/layout\/Footer";\n?/g, '');
  content = content.replace(/import SmoothScroll from "@\/components\/ui\/SmoothScroll";\n?/g, '');
  content = content.replace(/import Cursor from "@\/components\/ui\/Cursor";\n?/g, '');
  
  content = content.replace(/<SmoothScroll>/g, '<>');
  content = content.replace(/<\/SmoothScroll>/g, '</>');
  content = content.replace(/<Cursor \/>\s*/g, '');
  content = content.replace(/<div className="noise-bg" \/>\s*/g, '');
  content = content.replace(/<Navbar \/>\s*/g, '');
  content = content.replace(/<Footer \/>\s*/g, '');
  
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
