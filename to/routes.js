fetch('/urito/to/routes.json')
  .catch(r => { let _ = window.open('', '_self'); window.close(), _.close() })
  .then(r => r.json())
  .then(j => window.location = j[window.location.pathname])
