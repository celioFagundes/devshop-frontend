import { request } from 'graphql-request'
import useSWR from 'swr'
export const fetcher = (query, variables = {}) =>
  request('http://localhost:3000/graphql', query, variables)
export const useQuery = query => {
  return useSWR(query, fetcher)
}
