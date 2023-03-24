export default {
    type_anim(text: string, ele: JQuery<HTMLElement>, speed: number) {
        let typed = '';

        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                typed += text[i];
                ele.text(typed);   
            }, speed * i);
        }
    }
}