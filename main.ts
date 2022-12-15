let counter = 0
let hod = 0
let counter6 = 0

input.onGesture(Gesture.Shake, function () {

    let hod = randint(1, 6)

    music.playTone(Note.B5, music.beat(BeatFraction.Whole));

    counter += 1


    if (hod == 6) {

        counter6 += 1
        music.playTone(Note.C, music.beat(BeatFraction.Whole));

    }

    if (counter6 == 3) {

        whaleysans.showNumber(counter);

        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    }
})