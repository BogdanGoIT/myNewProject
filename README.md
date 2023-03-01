Для початку роботи нам потрібно зробити кілька простих кроків:

Встановити LTS версію Node.js. Якщо Node.js у Вас встановлений, тоді просто оновіть його.

Інструкція з оновлення Node.js
Встановити Expo.

# для Windows
npm install expo-cli --global

# для Mac
sudo npm install expo-cli --global

Перевірити встановлену версію Expo можна командою
expo --version

Ініціалізувати свій перший проект за допомогою Expo.
# Виберіть папку, де у Вас буде зберігатися проект і запустіть у терміналі команду

expo init myNewProject

# де myNewProject - назва Вашого проекту


Вибрати шаблон проекту blank (використовуйте стрілочки вгору/вниз і потім Enter)
Choose a template: (Use arrow keys)
  ----- Managed workflow -----
❯ blank                 a minimal app as clean as an empty canvas
  blank (TypeScript)    same as blank but with TypeScript configuration
  tabs                  several example screens and tabs using react-navigation
  ----- Bare workflow -----
  minimal               bare and minimal, just the essentials to get you started
  minimal (TypeScript)  same as minimal but with TypeScript configuration

Перейти в папку з проектом
cd myNewProject

Запустити проект
npm start

# Якщо у Вас Mac і під час запуску цієї команди показує помилку формату
# warn Failed to chmod xsel: EPERM: operation not permitted
# запускайте проект командою

sudo npm start
