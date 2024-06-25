import moment from "moment"
import useSWR from "swr"

export const useFetchUser = () => {

    const api = 'https://667afbb3bd627f0dcc91518c.mockapi.io/api/v1/users'

    const fetcher = url => fetch(url).then(res => res.json())
    
    let { data, isLoading, error } = useSWR(api, fetcher)

    data = data?.map((e) => ({...e, dob: moment(e.dob).format('DD-MM-yyyy')}) )

    return {
        data, isLoading, error
    }
}