input.onButtonPressed(Button.A, function () {
    if (position > 30) {
        position += -20
        pins.servoWritePin(AnalogPin.P1, position)
    } else {
        position = 90
        pins.servoWritePin(AnalogPin.P1, position)
    }
})
input.onButtonPressed(Button.B, function () {
    if (position < 150) {
        position += 20
        pins.servoWritePin(AnalogPin.P1, position)
    } else {
        position = 90
        pins.servoWritePin(AnalogPin.P1, position)
    }
})
let position = 0
basic.setLedColor(0x00ff00)
position = 90
pins.servoWritePin(AnalogPin.P1, position)
basic.forever(function () {
    basic.showNumber(position)
})
