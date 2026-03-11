import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [file, setFile] = useState(null)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    if (!file || !email) {
      setStatus('error')
      setMessage('Please provide both a file and email!')
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('email', email)

    try {
      setStatus('loading')
      setMessage('')
      const res = await axios.post(
        'https://sales-insight-automator-zz30.onrender.com/api/upload',
        formData
      )
      setMessage(res.data.message)
    } catch (err) {
      setStatus('error')
      setMessage(err.response?.data?.error || 'Something went wrong!')
    }
  }

  return (
    <div className="container">
      <h1>🚀 Sales Insight Automator</h1>
      <p className="subtitle">Upload your sales data and get an AI-powered summary in your inbox</p>

      <div className="card">
        <div className="field">
          <label>📂 Upload CSV or Excel File</label>
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {file && <span className="filename">✅ {file.name}</span>}
        </div>

        <div className="field">
          <label>📧 Recipient Email</label>
          <input
            type="email"
            placeholder="executive@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className={status === 'loading' ? 'btn loading' : 'btn'}
        >
          {status === 'loading' ? '⏳ Generating Summary...' : '✨ Generate & Send Summary'}
        </button>

        {status === 'success' && <div className="alert success">✅ {message}</div>}
        {status === 'error' && <div className="alert error">❌ {message}</div>}
      </div>

      <a href="http://localhost:5000/api-docs" target="_blank" className="swagger-link">
        📖 View API Documentation
      </a>
    </div>
  )
}

export default App