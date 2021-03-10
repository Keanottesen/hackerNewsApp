const getRandomColor = (): string => `hsla(${360 * Math.random()}, ${25 + 70 * Math.random()}%, ${85 + 10 * Math.random()}%, 0.9)`

export default getRandomColor