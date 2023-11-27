let tabItems = document.querySelectorAll(".process-tab-item");

let tabContentText = document.querySelector(".process-tab-content-text");

let newTexts = [
  `<p>Ви залишаєте заявку на сайті, і ми підбираємо для вас об'єкти з урахуванням ваших критеріїв. Ви отримуєте добірку пропозицій і всю інформацію про покупку на вашу електронну пошту або месенджер. За вашим запитом ми проведемо консультацію з фахівцем Deniz Estate у зручний для вас час. До ваших послуг юристи, імміграційні консультанти та ріелтори, які дадуть відповідь на ваші запитання.</p>`,
  `<p>Ми повністю супроводжуємо вас на всіх етапах придбання нерухомості в Іспанії, надаючи весь спектр послуг: від відкриття рахунку до укладення угоди та оформлення контрактів на вас як власника. Ми допомагаємо вам в оформленні іпотеки, купівлі нерухомості в розстрочку тощо. З вами працює персональний менеджер.</p>`,
  `<p>З нами ви отримуєте не тільки комплекс юридичних послуг вашою рідною мовою, а й допомогу в оформленні ПНП і громадянства. Ми оформляємо ВНЖ нашим клієнтам БЕЗКОШТОВНО при купівлі нерухомості від 500 000 €.<p/>
    <p>Золота віза інвестора в Іспанії видається в рамках прискореного процесу. Термін розгляду заяви на видачу візи становить 10 робочих днів (у виняткових випадках - 15). Ба більше, подавати документи й отримувати візу може як сам інвестор, так і його довірена особа - це дуже зручно, оскільки дає змогу не звертатися до консульства особисто. Одночасно з інвестором Золоту візу можуть отримати члени його сім'ї - подружжя і діти віком до 18 років. При цьому як дружині, так і дітям віком від 16 років нарівні з самим інвестором буде надано право на роботу в Іспанії.</p>`,
  `<p>Беремо в управління об'єкт і здаємо вашу нерухомість в оренду подобово або довгостроково. У вас є можливість здати апартаменти в управління керуючій компанії та отримувати дохід у розмірі 6-9 % річних від оренди.</p>
  <p>За вашим бажанням ми організуємо облаштування вашої нерухомості під ключ. Ця послуга затребувана серед клієнтів, які купують квартиру для здачі в оренду. Ми організуємо доставку меблів і техніки та подбаємо про облаштування вашої нерухомості.</p>`,
];

tabItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    tabItems.forEach(function (tabItem) {
      tabItem.classList.remove("active");
    });

    item.classList.add("active");

    tabContentText.innerHTML = newTexts[index];
  });
});