let Velosidad = 0
let Ruleta = 0
input.onButtonPressed(Button.A, function () {
    Velosidad = Velosidad * 2
})
input.onGesture(Gesture.Shake, function () {
    Ruleta = randint(1, 6)
    if (Ruleta == 1) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showIcon(IconNames.Asleep)
    } else if (Ruleta == 2) {
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
        basic.showIcon(IconNames.Angry)
    } else if (Ruleta == 4) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Silly)
    } else if (Ruleta == 5) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showIcon(IconNames.Sad)
    } else if (Ruleta == 6) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
    } else {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Surprised)
    }
})
input.onButtonPressed(Button.B, function () {
    Velosidad = Velosidad / 2
})
