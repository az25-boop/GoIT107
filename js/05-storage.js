/**
 * Напиши клас Storage який створює об'єкти для керування складом товарів.
 * При виклику отримуватиме один аргумент - початковий масив товарів і
 * записуватиме його властивість items.
 *
 * Додай методи класу:
 * - getItems() - повертає масив товарів.
 * - addItem(item) - отримує новий товар і додає його до поточних.
 * - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemToDelete) {
    //* filter
    // this.items = this.items.filter((item) => item !== itemToDelete);

    //* ============================================================

    //* indexOf + splice
    const indexToDelete = this.items.indexOf(itemToDelete);

    // -1 - результат роботи методу indexOf у випадку коли такого елементу в масиві не існує
    if (indexToDelete !== -1) {
      this.items.splice(indexToDelete, 1); // (з якого індексу почати видалення, скільки елементів будемо видаляти)
    } else {
      console.log("Такого товару не існує");
    }
  }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
storage.removeItem("🍌");
storage.removeItem("7");

console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
