input.onButtonPressed(Button.A, function () {
    if (ordner != 3) {
        if (sound < 11) {
            sound += 1
            serialmp3.runMp3Command(Mp3Command.PLAY_NEXT_TRACK)
        } else {
            sound = 1
            ordner += 1
            serialmp3.playMp3Track(sound, ordner)
        }
    } else {
        pins.servoWritePin(AnalogPin.P1, 180)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ordner == 3) {
        serialmp3.runMp3Command(Mp3Command.PLAY_NEXT_TRACK)
        pins.servoWritePin(AnalogPin.P1, 64)
    }
})
input.onButtonPressed(Button.B, function () {
    if (ordner != 3) {
        if (sound < 11) {
            sound += 1
            serialmp3.runMp3Command(Mp3Command.PLAY_NEXT_TRACK)
        } else {
            sound = 1
            ordner += 1
            serialmp3.playMp3Track(sound, ordner)
        }
    } else {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
})
let ordner = 0
let sound = 0
sound = 1
ordner = 1
basic.setLedColor(0x00ff00)
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.playMp3Track(sound, ordner)
basic.pause(500)
basic.setLedColor(0x0000ff)
ordner += 1
serialmp3.playMp3Track(sound, ordner)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.setLedColor(0xff0000)
    basic.pause(500)
    basic.setLedColor(0xffff00)
    basic.showIcon(IconNames.SmallHeart)
})
