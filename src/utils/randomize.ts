export function randomize() {
    return (Math.random() * 1e8).toString(16).replace(/\./gi, '-')
}