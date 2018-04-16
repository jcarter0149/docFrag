const messagesRef = document.querySelector("#messages")

const messageDomBuilder = () => {

    let fragment = document.createDocumentFragment()
    
        const messageContent = document.createElement("p")
        messageContent.className = "inMessage"
        messageContent.textContent = "ayyee"
        fragment.appendChild(messageContent)

        const messageContenta = document.createElement("p")
        messageContenta.className = "outMessage"
        messageContenta.textContent = "ayyee Aunty"
        fragment.appendChild(messageContenta)

        const messageContentb = document.createElement("p")
        messageContentb.className = "inMessage"
        messageContentb.textContent = "you coming to the cookout??"
        fragment.appendChild(messageContentb)

        const messageContentc = document.createElement("p")
        messageContentc.className = "outMessage"
        messageContentc.textContent = "Naw I hate our family"
        fragment.appendChild(messageContentc)

        const messageContentd = document.createElement("p")
        messageContentd.className = "inMessage"
        messageContentd.textContent = "lol same"
        fragment.appendChild(messageContentd)

            messagesRef.appendChild(fragment)
}

messageDomBuilder()