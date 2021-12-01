function starteQuiz () {
    serialmp3.playMp3TrackFromFolder(1, 2, Mp3Repeat.No)
}
input.onButtonPressed(Button.A, function () {
    sprecheIntro()
})
function sprecheIntro () {
    serialmp3.playMp3TrackFromFolder(2, 1, Mp3Repeat.No)
}
input.onButtonPressed(Button.B, function () {
    starteQuiz()
})
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.setLedColor(0xff0000)
serialmp3.setMp3Volume(30)
serialmp3.playMp3Folder(1, Mp3Repeat.No)
basic.showNumber(1)
basic.setLedColor(0x00ff00)
