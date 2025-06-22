import './globals.css'

export const metadata = {
  title: '稼げや祭\'25 - 目標管理アプリ',
  description: '自分の限界を突破しろ！',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}