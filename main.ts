input.onButtonPressed(Button.A, function () {
    mp3 += 1
    basic.showNumber(mp3)
    dreheKopfLinks()
})
function dreheKopfRechts () {
    while (position - 2 < 150) {
        position += 2
        pins.servoWritePin(AnalogPin.P1, position)
        basic.pause(1000)
    }
    basic.showNumber(position)
}
function dreheKopfLinks () {
    while (position - 2 > 30) {
        position += -2
        pins.servoWritePin(AnalogPin.P1, position)
        basic.pause(1000)
    }
    basic.showNumber(position)
}
input.onButtonPressed(Button.AB, function () {
    mp3 = 1
    basic.showNumber(mp3)
    serialmp3.playMp3Track(mp3, 1)
    pins.servoWritePin(AnalogPin.P1, position)
})
input.onButtonPressed(Button.B, function () {
    mp3 += -1
    basic.showNumber(mp3)
    dreheKopfRechts()
})
let position = 0
let mp3 = 0
mp3 = 0
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.setLedColor(0xff0000)
serialmp3.setMp3Volume(15)
serialmp3.playMp3Track(mp3, 1)
basic.setLedColor(0x00ff00)
