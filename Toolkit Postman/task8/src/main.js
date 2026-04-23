import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>${import.meta.env.VITE_APP_TITLE}</h1>
    <div class="card">
      <p><strong>Current medium:</strong> ${import.meta.env.VITE_ENVIRONMENT}</p>
      <p><strong>API URL:</strong> ${import.meta.env.VITE_API_URL}</p>
      <button id="check-env" type="button">Check variables in console</button>
    </div>
  </div>
`

document.querySelector('#check-env').addEventListener('click', () => {
  console.log('All client environment variables:', import.meta.env)
})