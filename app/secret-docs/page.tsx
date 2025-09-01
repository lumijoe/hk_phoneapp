'use client'

import { useState } from 'react'

export default function SecretDocs() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const handleAuth = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      
      const data = await response.json()
      
      if (data.authenticated) {
        setAuthenticated(true)
      } else {
        alert('パスワードが間違っています')
      }
    } catch (error) {
      alert('認証エラーが発生しました')
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">パスワードを入力してください</h2>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="パスワード"
          />
          <button 
            onClick={handleAuth}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            認証
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">内部仕様書</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">5Bシステムの詳細</h2>
        <p className="mb-4">
          このシステムは5つの銀行口座と4つの現金管理を効率的に行うために設計されています。
        </p>
        
        <h3 className="text-xl font-semibold mb-2">銀行口座の構成</h3>
        <ul className="list-disc list-inside mb-4">
          <li>メイン口座: 給与振込・主要な引き落とし用</li>
          <li>貯蓄口座: 長期貯蓄用</li>
          <li>投資口座: 投資資金管理用</li>
          <li>緊急時口座: 緊急時資金用</li>
          <li>サブ口座: その他の用途</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">現金管理システム</h3>
        <ul className="list-disc list-inside mb-4">
          <li>日常財布: 日々の買い物用</li>
          <li>交通費財布: 交通費専用</li>
          <li>娯楽財布: 趣味・娯楽用</li>
          <li>予備財布: 予備資金</li>
        </ul>
      </div>
    </div>
  )
}