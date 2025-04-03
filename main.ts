let yAngle = 0
let xAngle = 0
let pressure = 0
let yVal = 0
let xVal = 0
led.enable(false)
basic.forever(function () {
    xVal = pins.analogReadPin(AnalogPin.P1)
    yVal = pins.analogReadPin(AnalogPin.P2)

    // Math.map(value, fromLow, fromHigh, toLow, toHigh)
    xAngle = Math.map(xVal, 0, 1023, 0, 180)
    yAngle = Math.map(yVal, 0, 1023, 0, 180)
    pins.servoWritePin(AnalogPin.P3, xAngle)
    pins.servoWritePin(AnalogPin.P4, yAngle)
})
