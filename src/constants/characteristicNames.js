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
    ['heightChoice', "Висота на вибір"],
    ['sideAngleAdjust', "Регулювання кута бічного вирізу"],
    ['tableTopType', "Тип стільниці"],
    ['electricTableTopAngleAdjust', "Електричне регулювання кута нахилу стільниці"],
    ['electricVoltage', "Електрична напруга"],
    ['maxPower', "Максимальна потужність"],
    ['protectClass', "Клас захисту"],
    ['protectDegree', "Ступінь захисту"],
    ['longitudinalElevator', "Поздовжній підйомник"],
    ['transverseElevator', "Поперечний підйомник"],
    ['wheels', "Колеса"],
    ['footHandControl', "Пульт ручний + ножний"],
    ['waterproofMattress', "Водонепроникний матрац"],
    ['footControl2', "Ножний пульт (2 шт.)"],
    ['manualTableTopAngleAdjust', "Ручне регулювання кута нахилу стільниці"],
    ['shelfWithDrawerAndBowl', "Полиця з висувним ящиком і чашею з нержавіючої сталі"],
    ['gelHolder', "Тримач гелю"],
    ['heightWithoutMattress', "Висота (без матраца)"],
    ['recommendedMattress', "Рекомендовані розміри матраца"],
    ['backSegmentAngle', "Кут підйому заднього сегмента"],
    ['backSegmentAutoregression', "Авторегресія заднього сегмента"],
    ['weightWithoutWithAdds', "Вага без додаткових опцій / з додатковими опціями"],
    ['brightnessLux', "Яскравість (люкс)"],
    ['criRa', "Індекс передавання кольору (Ra)"],
    ['colorTemperature', "Колірна температура (K)"],
    ['dimmingRange', "Діапазон затемнення (%)"],
    ['ledCount', "Кількість світлодіодів"],
    ['sizeOfLightField', "Розмір світлового поля Ø (см)"],
    ['powerConsumption', "Споживана потужність (Вт)"],
    ['ledLifespanHours', "Термін служби світлодіодів (год)"],
    ['workingArea', "Робоча площа (см)"],
    ['lampBody', "Корпус лампи Ø (см)"],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
    ['', ""],
]);

// mainCategory led-lighting-systems
// secondaryCategory operating

// images/products/LED-2-1.webp
// images/products/LED-2-2.webp
// images/products/LED-2-3.webp
// images/products/LED-2-4.webp
// images/products/LED-2-5.webp
// images/products/LED-2-6.webp

// images/products/LED-3-1.webp
// images/products/LED-3-2.webp
// images/products/LED-3-3.webp
// images/products/LED-3-4.webp
// images/products/LED-3-5.webp

// images/products/LED-5-1.webp
// images/products/LED-5-2.webp
// images/products/LED-5-3.webp
// images/products/LED-5-4.webp

// images/products/LED-6-1.webp

// images/products/LED-8-1.webp
// images/products/LED-8-2.webp
// images/products/LED-8-3.webp
// images/products/LED-8-4.webp

// images/products/LED-115-1.webp
// images/products/LED-115-2.webp
// images/products/LED-115-3.webp

// images/products/LED-120-1.webp
// images/products/LED-120-2.webp
// images/products/LED-120-3.webp
// images/products/LED-120-4.webp
// images/products/LED-120-5.webp
// images/products/LED-120-6.webp
// images/products/LED-120-7.webp
// images/products/LED-120-8.webp
// images/products/LED-120-9.webp

// images/products/LED-130-1.webp
// images/products/LED-130-2.webp
// images/products/LED-130-3.webp
// images/products/LED-130-4.webp
// images/products/LED-130-5.webp
// images/products/LED-130-6.webp
// images/products/LED-130-7.webp
// images/products/LED-130-8.webp
// images/products/LED-130-9.webp


// images/products/LED-150-1.webp
// images/products/LED-150-2.webp
// images/products/LED-150-3.webp
// images/products/LED-150-4.webp

// images/products/LED-300-1.webp
// images/products/LED-300-2.webp
// images/products/LED-300-3.webp


export default characteristicNames;