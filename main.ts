namespace blink {
    export function blink(pin: DigitalPin, delay: number) {
        pins.digitalWritePin(pin, 0)
        control.setInterval(function () {
            pins.digitalWritePin(pin, 1)
        }, delay, control.IntervalMode.Timeout)
    }
}