const wakeDog = function wakeDog(dogName, dogBreed) {
    const wake = `Wake ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake;
  }

const leashDog = function leashDog(dogName, dogBreed) {
    const leash= `Leash ${dogName} the ${dogBreed}`
    console.log(leash);
    return leash;
}

const walkToPark = function walkToPark(dogName, dogBreed) {
    const walkPark = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(walkPark);
    return walkPark;
}

const throwFrisbee = function throwFrisbee(dogName, dogBreed) {
    const frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(frisbee);
    return frisbee
}

const walkHome = function walkHome(dogName, dogBreed) {
    const home = `Walk home with ${dogName} the ${dogBreed}`
    console.log(home);
return home;
}

const unleashDog = function unleashDog(dogName, dogBreed) {
    const unleash = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleash);
    return unleash;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const messages = [];

    for (let i = 0; i < routine.length; i++) {
        const activity = routine[i](dogName, dogBreed)
        messages.push(activity)
    }

    return messages;
}