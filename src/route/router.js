import {regular1} from '../controller/inputMessage'

export const setRoute = async (app) => {
    app.post('/entityamount',regular1)
}