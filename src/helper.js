export function Fetching(id) {
    (async() => { 
        let url = `https://picsum.photos/id/${id}/500/400`;
        let res = await fetch(url);
        let blob = await res.blob();
        let krl = URL.createObjectURL(blob);
        console.log(krl);
        return krl;
    })();
}
