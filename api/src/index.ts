import { Hono } from 'hono'

import { fetchMovies } from './controllers/popular'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/popular', async (c) => {
  const res = await fetchMovies()
  c.json(res)
})

app.notFound((c) => c.text('Not Found this route', 404))

export default app
