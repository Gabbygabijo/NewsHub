import axios from "axios"

const topStoriesUrl = `https://hacker-news.firebaseio.com/v0`

export const apiGetData = async () => {
    let api_url = `${topStoriesUrl}/topstories.json`
    let stories
    try {
  
      stories = await axios.get(api_url, )
  
    } catch (error) {
      stories = error
      console.log(error)
    } finally {
      return stories;
    }
  }
  
  export const apiEachStory = async (id?: number) => {
    let api_url = `${topStoriesUrl}/item/${id}.json?print=pretty`
    let stories
    try {
  
      stories = await axios.get(api_url, )
  
    } catch (error) {
      stories = error
      console.log(error)
    } finally {
      return stories;
    }
  }
  