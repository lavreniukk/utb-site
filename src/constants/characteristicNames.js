const characteristicNames = new Map([
    ['width', 'Ширина'],
    ['height', 'Висота'],
    ['length', 'Довжина'],
    ['heightAdjust', 'Регулювання висоти'],
    ['maxLoad', 'Максимальне навантаження'],
    ['tableWeight', 'Маса столу'],
    ['towelHolder', 'Тримач рушників'],
    ['wheelSystem', 'Колісна система'],
    ['faceOpening', 'Лицьовий отвір'],
    ['antiTrendelenburgPos', 'Положення анти-Тренделенбурга'],
    ['backAngleAdjust', 'Регулювання кута нахилу спинки'],
    ['headrestAngleAdjust', 'Регулювання кута нахилу підголівника'],
    ['curbWeight', 'Вага'],
    ['dripHanger', 'Крапельна вішалка'],
    ['footControl', 'Ножний пульт'],
    ['footRest', 'Знімна підніжка'],
    ['handles', 'Ручки'],
    ['injectionSupport', "Підтримка ін'єкцій"],
    ['trendelenburgPos', "Положення Тренделенбурга"],
    ['lengthWith', "Довжина (без підніжки / з підніжкою)"],
    ['stepHeight', "Висота кроку"],
    ['mattressAndTotalLength', "Довжина матраца / загальна"],
    ['mattressAndTotalWidth', "Ширина матраца / загальна"],
    ['wheelDiameter', "Діаметр колеса"],
    ['sideRailings', "Бічні перила"],
    ['wheelLock', "Центральний замок коліс"],
    ['oxygenHanger', "Вішалка для кисневого балона"],
    ['personalBasket', "Кошик для особистих речей пацієнта"],
    ['patientRestraints', "Обмеження пацієнтів"],
    ['antibacterialPaintFrame', "Каркас покритий антибактеріальною фарбою"],
    ['mattressHandles', "Матрац з ручками для перенесення пацієнтів"],
    ['guideXRayCassette', "Направляюча рентгенівська касета"],
    ['seatAndTotalWidth', "Ширина сидіння / загальна"],
    ['depth', "Глибина"],
    ['seatHeight', "Висота сидіння"],
    ['headrestHeightAdjust', "Регулювання висоти підголівника"],
    ['armrestsHeightAdjust', "Регулювання висоти підлокітників"],
    ['bolster', "Болстер"],
    ['totalUnfoldedLength', "Загальна довжина в розкладеному вигляді"],
    ['footrestAngleAdjust', "Регулювання кута нахилу підніжки"],
    ['footrest', "Підніжка"],
    ['heightWithHeadrest', "Висота загальна / з підголовником"],
    ['totalUnfoldedLengthWithFootrest', "Загальна довжина в розкладеному стані з підставкою для ніг"],
    ['eurorails', "Єврорейки"],
    ['flipTable', "Перекидний стіл"],
    ['toolTable', "Інструментальний стіл"],
    ['heightOnFeet', "Висота на ніжках"],
    ['heightOnWheels', "Висота на колесах"],
    ['base', "Основа"],
    ['seat', "Сидіння"],
    ['totalTableWidth', "Загальна ширина столу на вибір"],
    ['totalTableDepth', "Загальна глибина столу на вибір"],
    ['heightToTabletop', "Висота до стільниці на вибір"],
    ['maxLoadOnSideShelf', "Максимальне навантаження на бічну полицю"],
    ['lowerBerth', "Нижня полиця"],
    ['sideBerth', "Бічна полиця"],
    ['shelf', "Шухляда"],
    ['cabinet', "Шафа"],
    ['hanger', "Вішалка"],
    ['tableWeightWithMetal', "Вага з металевими полицями"],
    ['tableWeightWithGlass', "Вага зі скляними полицями"],
    ['wheelBrakes', "Колеса з гальмом"],
    ['metalShelves', "Металеві полиці"],
    ['glassShelves', "Скляні полиці"],
    ['chromeNickelShelves', "Хромонікелеві полиці"],
    ['maxLoadOnShelf', "Максимальне навантаження на полицю"],
    ['shelfSize', "Розміри полиці"],
    ['additionalShelf', "Додаткова полиця"],
    ['cableSupport', "Підтримка кабелю"],
    ['powerExtension', "Подовжувач живлення"],
    ['widthChoice', "Ширина на вибір"],
    ['tableTopAngleAdjust', "Регулювання кута нахилу стільниці"],
    ['manuallyArmrestAdjust', "Підлокітники, що регулюються вручну"],
    ['dropOutSideShelves', "Випадаючі бічні полиці"],
    ['steeringFrame', "Рульова рама"],
    ['electricTableTopAngleAdjust', "Електричне регулювання кута стільниці"],
    ['frameControl', "Керування рамою"],
    ['chestAngleAdjust', "Регулювання кута грудного відділу"],
    ['lumbarAngleAdjust', "Регулювання кута нахилу поперекового відділу"],
    ['sideSwing', "Боковий розмах"],
    ['handTraction', "Ручна тяга"],
    ['armrest', "Підлокітники"],
    ['headrestHeightAdjust', "Регулювання висоти підголівника"],
    ['headrestSwinging', "Розгойдування підголівника"],
    ['centralAngleAdjust', "Регулювання центрального кута"],
    ['', ""],
]);

// length
// widthChoice
// height
// headrestAngleAdjust
// chestAngleAdjust
// lumbarAngleAdjust
// footrestAngleAdjust
// backAngleAdjust
// tableTopAngleAdjust
// curbWeight
// maxLoad
// faceOpening  в стандарті
// manuallyArmrestAdjust   опція
// dropOutSideShelves  опція
// towelHolder опція
// steeringFrame   опція
// frameControl
// footControl опція
// wheelSystem опція
// electricTableTopAngleAdjust опція
// images/products/.webp

export default characteristicNames;