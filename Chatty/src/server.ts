import {http} from "./http";
import './websocket/client'

//PORT
http.listen(3001, () => console.log("Server is running on port 3001"))