export async function getAllBets() {

    const response = await fetch('/bets');
    return await response.json();
}

export async function getBetCount() {
    const response = await fetch('/betcount');
    return await response.json();
}
