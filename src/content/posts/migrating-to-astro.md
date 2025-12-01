---
title: 'Migrating to Astro 4.0'
description: 'Exploring the new View Transitions API and significant performance improvements'
pubDate: '2023-11-20'
tags: ['astro', 'performance']
---

## hey

### heading 3

**bold text** hey

```python
class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year
        self.borrowed = False

    def borrow(self):
        if not self.borrowed:
            self.borrowed = True
            return True
        return False

    def __repr__(self):
        status = "Borrowed" if self.borrowed else "Available"
        return f"{self.title} by {self.author} ({self.year}) - {status}"


class Library:
    def __init__(self):
        self.books = []

    def add_book(self, title, author, year):
        self.books.append(Book(title, author, year))

    def search(self, keyword):
        return [b for b in self.books if keyword.lower() in b.title.lower()]

    def borrow_book(self, title):
        for b in self.books:
            if b.title.lower() == title.lower():
                return b.borrow()
        return False

    def summary(self):
        total = len(self.books)
        borrowed = sum(b.borrowed for b in self.books)
        print(f"Total books: {total}")
        print(f"Borrowed: {borrowed}")
        print(f"Available: {total - borrowed}")

    def show_books(self):
        print("\nLibrary Inventory:")
        for b in self.books:
            print(" -", b)


# Example usage
lib = Library()
lib.add_book("The Hobbit", "J.R.R. Tolkien", 1937)
lib.add_book("1984", "George Orwell", 1949)
lib.add_book("Clean Code", "Robert Martin", 2008)

lib.borrow_book("1984")

lib.show_books()
lib.summary()
print("\nSearch results:", lib.search("code"))


```
