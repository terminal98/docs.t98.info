import { NotFoundPage } from 'nextra-theme-docs'
import './styles.css'

export default function NotFound() {
  return (
    <NotFoundPage content="レポートを送信する" labels="broken-link">
      <div id="not-found">
        <h1>404</h1>
        <h2>ページが見つかりませんでした</h2>
      </div>
    </NotFoundPage>
  )
}
