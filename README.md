Встановити LTS версію Node.js. Якщо Node.js у Вас встановлений, тоді просто оновіть його.
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
Запустити проект
npm start

# Якщо у Вас Mac і під час запуску цієї команди показує помилку формату
# warn Failed to chmod xsel: EPERM: operation not permitted
# запускайте проект командою

sudo npm start
