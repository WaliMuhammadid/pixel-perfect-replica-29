import os
import glob

files = glob.glob('src/app/**/*.tsx', recursive=True)
for filepath in files:
    if 'layout.tsx' in filepath or 'template.tsx' in filepath:
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    content = content.replace('import Navbar from "@/components/layout/Navbar";\n', '')
    content = content.replace('import Footer from "@/components/layout/Footer";\n', '')
    content = content.replace('import SmoothScroll from "@/components/ui/SmoothScroll";\n', '')
    content = content.replace('import Cursor from "@/components/ui/Cursor";\n', '')
    
    content = content.replace('<SmoothScroll>', '<>')
    content = content.replace('</SmoothScroll>', '</>')
    content = content.replace('<Cursor />', '')
    content = content.replace('<div className="noise-bg" />', '')
    content = content.replace('<Navbar />', '')
    content = content.replace('<Footer />', '')
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated', filepath)
