import type { RequestHandler } from "@sveltejs/kit"
import 'dotenv/config'

export const get: RequestHandler = async () => {
  let apiData = null
  const baseURL = process.env.BASE_URL
  const accessToken = process.env.ACCESS_TOKEN
  const url = `${baseURL}/entries?access_token=${accessToken}&content_type=portfolio`
  const response = await fetch(url)
  
  if (response.ok){
    const data = await response.json()
    apiData = data.items.map(item => {
      return item.fields
    })
  }

  // console.log(response.status)
  // console.log(apiData)

  return {
    status: response.status,
    body: {content: apiData}
  }
}