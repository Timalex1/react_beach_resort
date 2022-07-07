import {createClient} from 'contentful'

export default createClient({
    space:process.env.REACT_SPACE_BEACH_RESORT,
    accessToken: process.env.REACT_ACCESS_TOKEN
})