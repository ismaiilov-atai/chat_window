
let messageTime = new Date();


let currentTime = messageTime.toLocaleString('en-US', {day: '2-digit', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })


let msgRandom = [
    {text: "Let's talk about getting new technologies to our project.", time: currentTime}, 
    {text: 'What do you think about Firebase integration in our authentication part?', time: currentTime},
    {text: 'Yeah that cool, let me know if you have new ideas that we can discuss about it.', time: currentTime},
    {text: 'Bootcamp is the way to go what are the pros and cons?', time: currentTime},
]

let toDisplayMsg = [
    {text: "Hello", time: "Nov 15, 2022, 10:11 AM"}, 
    {text: 'hi', time: 'Nov 15, 2022, 10:15 AM'},
    {text: 'how are you doing?', time: 'Nov 15, 2022, 10:20 AM'},
    {text: 'good, how are you doing?', time: 'Nov 15, 2022, 10:25 AM'},
]

/////////////////////////////* FUNCTIONS *////////////////////////////
$('#text').on('input', function() {
     this.value ? $('#btn_voice_send').text('send') : $('#btn_voice_send').text('mic');
});


$('#btn_voice_send').click(function() {
    messageGenerater();
});


let displayingMessages = () => {
    
    for (let i = 0; i < toDisplayMsg.length; i++) {
        // message container
        let msgContainer = $('<div></div>');
        msgContainer.addClass(i % 2 == 0 ? `sender_side msg_container` : `resive_side msg_container`)
        // messages
        let messageValue = $('<p></p>');
        messageValue.addClass('message')
        msgContainer.text( toDisplayMsg[i].text )
        // date
        let timeStamp = $('<p></p>');
        timeStamp.text( toDisplayMsg[i].time )
        timeStamp.addClass('timeStamp');
        // appending
        msgContainer.append(timeStamp);
        msgContainer.append(messageValue);
        $('#chat_window').append(msgContainer);
    }
    
}

displayingMessages();

let messageGenerater = () => {
    if ($('#text').val().length > 0) { 
        toDisplayMsg = [];
        toDisplayMsg.push({text: $('#text').val(), time: currentTime});
        toDisplayMsg.push(msgRandom[Math.floor(Math.random() * msgRandom.length)]);
        $('#text').val('') 
        $('#btn_voice_send').text('mic');
        displayingMessages();
    } else {
        // voice message
    }

    $("html, body").animate({
        scrollTop: $('body').outerHeight()
    }, 600);
};



