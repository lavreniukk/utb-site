export default function changeTitle(mainCategory, producerName) {
    if (mainCategory) {
        document.title = 'УТБ Ресурс - ' + mainCategory;
    }

    if (producerName) {
        document.title = 'УТБ Ресурс - ' + producerName;
    }

    document.title = 'УТБ Ресурс - Продукція';
}