var byeSpeaker = (function () {
    const speakWord = "Goodbye";

    function speak(name) {
        console.log(speakWord + " " + name);
    }

    return {
        speak: speak
    };
})();