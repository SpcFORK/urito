fetch('/routes.json')
  .then(r => r.json())
  .then(j => window.location = j[window.location.pathname])
  .finally(r => { let _ = window.open('', '_self'); window.close(), _.close() })
