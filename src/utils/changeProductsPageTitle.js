export default function changeTitle(mainCategory, producerName) {
    if (mainCategory) {
        document.title = 'УТБ Ресурс - ' + mainCategory;
        return;
    }

    if (producerName) {
        document.title = 'УТБ Ресурс - ' + producerName;
        return;
    }

    document.title = 'УТБ Ресурс - Продукція';
}