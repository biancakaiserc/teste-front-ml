import fetch from 'isomorphic-unfetch'

export async function getItems(slug) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${slug}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      const items = await response.json()
      return items
    } else {
      console.log('API Conection failed.')
      // https://github.com/developit/unfetch#caveats
      let error = new Error(response.statusText)
      error.response = response
      return Promise.reject(error)
    }
  } catch (error) {
    console.error(
      'You have an error in your code or there are Network issues.',
      error
    )
    throw new Error(error)
  }
}

export async function getItem(slug) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${slug}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      const item = await response.json()
      return item
    } else {
      console.log('API Conection failed.')
      // https://github.com/developit/unfetch#caveats
      let error = new Error(response.statusText)
      error.response = response
      return Promise.reject(error)
    }
  } catch (error) {
    console.error(
      'You have an error in your code or there are Network issues.',
      error
    )
    throw new Error(error)
  }
}

export async function getItemDescription(slug) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${slug}/description`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      const itemDescription = await response.json()
      return itemDescription
    } else {
      console.log('API Conection failed.')
      // https://github.com/developit/unfetch#caveats
      let error = new Error(response.statusText)
      error.response = response
      return Promise.reject(error)
    }
  } catch (error) {
    console.error(
      'You have an error in your code or there are Network issues.',
      error
    )
    throw new Error(error)
  }
}

export async function getItemData(slug) {
  const itemData = await getItem(slug)
  const descData = await getItemDescription(slug)
  return { itemData, descData }
}