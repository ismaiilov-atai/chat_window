/////////////////////////////* DATA *////////////////////////////
let messageTime = new Date();

////////////*  https://stackoverflow.com/users/3837522/abhay-kumar current time taken from abhy-kumar reply on stackoverflow */////////////
// (2) Your messages should include date as well as time (currently you have only time).
let currentTime = messageTime.toLocaleString('en-US', {day: '2-digit', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })

/* (1). Responses from the computer should generate a random conversation, however,
 currently it always comes back with the same response “sender reply to come here”.
  Add a bit of diversity to those responses. */
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

/* (3) you should not be defining the onClick method on the button from HTML. Move the onClick logic to your .js file. */
$('#btn_voice_send').click(function() {
    messageGenerater();
});

/*
(4) Your .js file should interact with the DOM using only jQuery, but in a couple of places you are using native HTML DOM methods. 
Everywhere you use the document keyword, you should replace it with the corresponding jQuery method.
*/
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



