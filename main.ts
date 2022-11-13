let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
