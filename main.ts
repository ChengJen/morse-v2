radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.setTransmitPower(7)
radio.setGroup(1)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.analogPitch(500, 0)
        radio.sendNumber(1)
    } else {
        pins.analogPitch(0, 0)
        radio.sendNumber(0)
    }
})
