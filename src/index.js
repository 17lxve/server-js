import { serverMessages } from './messages/index.js'
import server from './app.js'

function main(){
    const port = 8080
    server.listen(port, () => serverMessages.up(port))
}

main()