import oops from './oops.jpg';

export async function Fetching(id) {
    let url = `https://picsum.photos/id/${id}/500/400`;
    let res = await fetch(url);
    let blob = await res.blob();
    if (blob.type === 'text/plain') {
        return oops; 
    }
    let ret = URL.createObjectURL(blob);
    return ret;
}
