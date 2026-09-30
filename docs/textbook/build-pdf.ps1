#Requires -Version 5.1
<#
  Сборка PDF учебника: textbook-ru.md -> HTML -> PDF (через build-pdf.py).
  Требует: python + markdown (pip), Microsoft Edge.
  Использование: powershell -ExecutionPolicy Bypass -File build-pdf.ps1
#>
$ErrorActionPreference = 'Stop'
$Dir = Split-Path -Parent $MyInvocation.MyCommand.Path
python (Join-Path $Dir 'assemble.py')
if ($?) { python (Join-Path $Dir 'build-pdf.py') }
