"""Assemble textbook-ru.md from chapters/. Run: python assemble.py"""
import os

TB = os.path.dirname(os.path.abspath(__file__))
CHAPTERS = ['01-intro.md', '02-document.md', '03-nodes.md', '04-commands.md',
            '05-geometry.md', '06-colours.md', '07-text.md', '08-selections.md',
            '09-dialogs.md', '10-raster.md', '11-files.md', '12-debug.md']

parts = ['# Учебник по скриптингу в Affinity (SDK 33000)', '',
         '> JavaScript-скрипты для Affinity Designer / Photo / Publisher.',
         '> Источник: `docs/textbook/chapters/`. Онлайн-SDK: https://sdk.affinity.studio/33000/js/index.html',
         '> Референс API: `docs/sdk/`. Гайды: `docs/guides/`.', '']
for ch in CHAPTERS:
    t = open(os.path.join(TB, 'chapters', ch), encoding='utf-8').read()
    parts.append(t.strip())
    parts.append('')
out = '\n'.join(parts)
open(os.path.join(TB, 'textbook-ru.md'), 'w', encoding='utf-8').write(out)
print('textbook-ru.md:', len(out.splitlines()), 'lines')
