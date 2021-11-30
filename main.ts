input.onButtonPressed(Button.A, function () {
    if (frage == 1) {
        serialmp3.playMp3Track(2, 1)
        basic.showNumber(1)
        basic.setLedColor(0x00ff00)
        serialmp3.playMp3Track(4, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (frage == 1) {
        serialmp3.playMp3Track(3, 1)
        basic.showNumber(0)
        basic.setLedColor(0xff0000)
        serialmp3.playMp3Track(4, 1)
    }
})
let frage = 0
let mp3 = 0
frage = 1
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.setMp3Volume(30)
serialmp3.playMp3Track(mp3, 1)
