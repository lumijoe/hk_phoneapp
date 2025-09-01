import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">HK Phone App</h1>
        <p className="mb-4">家計管理を実現する、見たことない家計簿アプリ</p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">主な特徴</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>最大5つの銀行口座を一元管理</li>
            <li>4つの現金袋システムで現金を用途別に振り分け</li>
            <li>各口座間の資金移動を可視化</li>
            <li>カスタマイズ可能なカテゴリー</li>
            <li>モバイルファースト設計</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link 
            href="/secret-docs"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            内部仕様書を見る（要認証）
          </Link>
        </div>
      </div>
    </main>
  )
}