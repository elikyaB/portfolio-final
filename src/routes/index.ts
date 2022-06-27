import type { RequestHandler } from "@sveltejs/kit"
import 'dotenv/config'

export const get: RequestHandler = async () => {
  let apiData = null
  const baseURL = process.env.BASE_URL
  const accessToken = process.env.ACCESS_TOKEN
  const url = `${baseURL}/entries?access_token=${accessToken}&content_type=portfolio&fields.featured=yes&order=-fields.created`
  const response = await fetch(url)
    .catch(error => {console.log(error)})
  
  if (response?.ok) {
    const data = await response.json()
    apiData = data.items.map(item => {
      return item.fields
    })
  }

  return {
    status: response?.status,
    body: {content: apiData}
  }
}