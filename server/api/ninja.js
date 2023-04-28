export default defineEventHandler(async (event) => {
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=ntr8yRzPueomUwLwGgm3eXZAyl0T0pgi8XNOwRVS')

  return data
})