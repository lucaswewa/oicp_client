const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async (n) => {
    console.log('ping')
    const response = await window.versions.ping(n, n+1)
    console.log(response)
    console.log(window.versions.desktop)

}

(function(n) {
    func(n)
    setTimeout(arguments.callee, 1000, n+1)
})(1)

new window.Notification('Title', {body: 'Body'})
    .onclick = () => { console.log('clicked') }