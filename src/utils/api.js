export async function apiGet(endpoint) {
    const response = await fetch(`https://hp-api.onrender.com/api/spells/${endpoint}`);
    const data = await response.json();
    return data
}