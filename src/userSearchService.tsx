export default async function fetchUser(userName : string) {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    return data;
}