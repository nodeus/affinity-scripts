"""textbook-ru.md -> HTML -> PDF (Edge headless). Run: python build-pdf.py"""
import markdown, os, shutil, subprocess

TB = os.path.dirname(os.path.abspath(__file__))
md = open(os.path.join(TB, 'textbook-ru.md'), encoding='utf-8').read()
body = markdown.markdown(md, extensions=['fenced_code', 'tables', 'toc'])
html = '''<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8">
<title>Учебник по скриптингу в Affinity</title><style>
body{font-family:"Segoe UI",Arial,sans-serif;max-width:900px;margin:2em auto;line-height:1.55;color:#111}
pre{background:#f4f4f4;padding:1em;overflow-x:auto;border:1px solid #ddd}
code{font-family:Consolas,"Courier New",monospace}
table{border-collapse:collapse;width:100%%}th,td{border:1px solid #bbb;padding:4px 8px;text-align:left}
h1{border-bottom:2px solid #333}h2{color:#1a3a5c}
</style></head><body>%s</body></html>''' % body
open(os.path.join(TB, 'textbook-ru.html'), 'w', encoding='utf-8').write(html)

# Stage via TEMP (paths with '!' break Edge file:// URLs)
import tempfile
stage = tempfile.mkdtemp(prefix='affinity-tb-')
stage_html = os.path.join(stage, 'tb.html')
stage_pdf = os.path.join(stage, 'tb.pdf')
shutil.copy(os.path.join(TB, 'textbook-ru.html'), stage_html)
edge = (r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe')
if not os.path.exists(edge):
    edge = r'C:\Program Files\Microsoft\Edge\Application\msedge.exe'
url = 'file:///' + stage_html.replace('\\', '/').replace(' ', '%20')
subprocess.run([edge, '--headless=new', '--disable-gpu', '--no-sandbox',
                '--no-first-run', '--user-data-dir=' + os.path.join(stage, 'profile'),
                '--print-to-pdf=' + stage_pdf, '--print-to-pdf-no-header', url],
               check=False, capture_output=True, timeout=180)
shutil.copy(stage_pdf, os.path.join(TB, 'textbook-ru.pdf'))
print('PDF:', os.path.join(TB, 'textbook-ru.pdf'),
      os.path.getsize(os.path.join(TB, 'textbook-ru.pdf')), 'bytes')
