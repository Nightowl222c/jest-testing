export function getFirstNElementsOf3Series(n) {
    if (n < 0) {
        throw new Error('n must be a positiv integer');
    }

    const result =  [];
    for (let i = 1; i <= n; i++) {
        result.push(3*i);
    }
    return result;
}