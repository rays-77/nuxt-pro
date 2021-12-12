/**
 * 验证是否未验证的中间件
 */

export default function ({ store, redirect }) {
  if (store.state.user) {
    return redirect('/')
  }
}