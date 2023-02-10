function shout(string) {
    return string.toUpperCase(); 
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {

    switch (string) {
        case string.toLowerCase():
            return "I can't hear you!";
            break;

        case string.toUpperCase():
            return "YES INDEED!";
            break;

        default:
            return "I would love to!";
            
    }

}