const year = 31557600
let planets = {
    earth : 1.0,
    mercury  : 0.2408467,
    venus  : 0.61519726,
    mars  : 1.8808158,
    jupiter  : 11.862615,
    saturn  : 29.447498,
    uranus  : 84.016846,
    neptune : 164.79132
}
let dogYears = (planet, age) =>  {
    age /= year
    let orbital = planets[planet]
    let result = age / orbital * 7
    return Math.round(result * 100) / 100;
}
let dogYears2 = (planet, age) =>  {
    return parseFloat((age * 7 / planets[planet] / year).toFixed(2))
}