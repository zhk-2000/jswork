let ws
function connect(){
    let server = document.getElementById('server').value
    ws = new WebSocket(server)
}