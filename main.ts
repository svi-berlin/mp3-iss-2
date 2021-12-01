function starteQuiz () {
    quizGestartet = 1
    serialmp3.playMp3TrackFromFolder(frage, quiz, Mp3Repeat.No)
}
input.onButtonPressed(Button.A, function () {
    if (quizGestartet == 0) {
        sprecheIntro()
    } else {
        if (frage == 1) {
            serialmp3.playMp3TrackFromFolder(2, quiz, Mp3Repeat.No)
            basic.showNumber(1)
            basic.setLedColor(0x00ff00)
        }
    }
})
function sprecheIntro () {
    serialmp3.playMp3TrackFromFolder(2, 1, Mp3Repeat.No)
}
input.onButtonPressed(Button.B, function () {
    if (quizGestartet == 0) {
        starteQuiz()
    } else {
        if (frage == 1) {
            serialmp3.playMp3TrackFromFolder(3, quiz, Mp3Repeat.No)
            basic.showNumber(0)
            basic.setLedColor(0xff0000)
        }
    }
})
let frage = 0
let quiz = 0
let quizGestartet = 0
quizGestartet = 0
quiz = 2
frage = 1
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.setLedColor(0x007fff)
serialmp3.setMp3Volume(30)
serialmp3.playMp3Folder(1, Mp3Repeat.No)
basic.showIcon(IconNames.Heart)
