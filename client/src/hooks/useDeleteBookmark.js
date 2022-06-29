import axios from 'axios'

export const deleteBookmark = async (setBookmark, getWishlist, url) => {
  const token = localStorage.getItem('token')

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response) {
      setBookmark(false)
      getWishlist()
    }
  } catch (error) {
    //console.log(error.response.data.message)
  }
}
