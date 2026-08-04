void function callee(px) {
  fetch(px ?? '/urito/to/routes.json')
    .then(r => r.json())
    .then(j => j.cdn ? callee(j.cdn) : window.location = j[window.location.pathname])
    .catch(r => { let _ = window.open('', '_self'); window.close(), _.close() })
}()
