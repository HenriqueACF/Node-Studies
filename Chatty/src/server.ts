import {http} from "./http"
import './websocket/client'
import './websocket/admin'

//PORT
http.listen(3001, () => console.log("Server is running on port 3001"))