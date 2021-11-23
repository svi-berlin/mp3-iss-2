input.onButtonPressed(Button.A, function () {
    mp3 += 1
    basic.showNumber(mp3)
    serialmp3.playMp3Track(mp3, 1)
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
input.onButtonPressed(Button.B, function () {
    dreheKopfRechts()
})
let position = 0
let mp3 = 0
mp3 = 0
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.setLedColor(0x00ff00)
serialmp3.setMp3Volume(15)
basic.forever(function () {
	
})
