const API_KEY = '9b31XwQcbPSFrMhL0tMb3NJtaSCoQX8a'
export default async function getGifs({ keyword = 'morty'} = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  const res = await fetch(API_URL)
  const response = await res.json()
  const { data } = response
  const gifs = data.map(image => {
    const{ images, title, id } = image
    const { url } = images.original
    return { title, id, url }
  })
  return gifs
}