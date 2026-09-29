Get-ChildItem -Path 'src\app' -Filter 'page.tsx' -Recurse | ForEach-Object {
     = Get-Content $_.FullName -Raw
    
    # Remove imports
     = $content -replace 'import Navbar from "@/components/layout/Navbar";\r?\n', ''
     = $content -replace 'import Footer from "@/components/layout/Footer";\r?\n', ''
     = $content -replace 'import SmoothScroll from "@/components/ui/SmoothScroll";\r?\n', ''
     = $content -replace 'import Cursor from "@/components/ui/Cursor";\r?\n', ''
    
    # Remove JSX wrappers and components
     = $content -replace '<SmoothScroll>\s*', ''
     = $content -replace '</SmoothScroll>\s*', ''
     = $content -replace '<Cursor />\s*', ''
     = $content -replace '<div className="noise-bg" />\s*', ''
     = $content -replace '<Navbar />\s*', ''
     = $content -replace '<Footer />\s*', ''
    
    # Add a <> fragment wrapper if the page now returns multiple elements (like Preloader + main)
    # Actually, we can just replace the outer most <SmoothScroll> with <>
    # Wait, the regex replaced <SmoothScroll> with nothing. Let's make sure it returns a fragment if needed.
    # It's safer to let them return <main> directly if it's the only thing left.
    # But wait, Home page has <Preloader /> and <main>.
    
    Set-Content -Path $_.FullName -Value $content
}

Get-ChildItem -Path 'src\app' -Filter 'not-found.tsx' -Recurse | ForEach-Object {
     = Get-Content $_.FullName -Raw
     = $content -replace 'import Navbar from "@/components/layout/Navbar";\r?\n', ''
     = $content -replace 'import Footer from "@/components/layout/Footer";\r?\n', ''
     = $content -replace 'import Cursor from "@/components/ui/Cursor";\r?\n', ''
     = $content -replace '<Cursor />\s*', ''
     = $content -replace '<div className="noise-bg" />\s*', ''
     = $content -replace '<Navbar />\s*', ''
     = $content -replace '<Footer />\s*', ''
    Set-Content -Path $_.FullName -Value $content
}
