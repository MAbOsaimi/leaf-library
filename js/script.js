const modal = document.querySelector(".modal");
const form = document.getElementById("modal-form");
const modalOpenBtn = document.querySelector(".modal-open-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalConfirmBtn = document.querySelector(".modal-confirm-btn");
const bookContainer = document.querySelector(".books-container");

function createBookCard(bookTitle, author, pages, publicationYear, imgSrc) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  const bookCover = document.createElement("img");
  bookCover.src = imgSrc || "./assets/images/closed-book.svg";
  bookCover.classList.add("book-cover");

  const bookMetaContainer = document.createElement("div");
  bookMetaContainer.classList.add("book-meta-container");

  const bookHeader = document.createElement("div");
  bookHeader.classList.add("book-header");

  const bookTitleElement = document.createElement("div");
  bookTitleElement.classList.add("book-title");
  bookTitleElement.textContent = bookTitle;

  const bookAuthorElement = document.createElement("div");
  bookAuthorElement.classList.add("book-author");
  bookAuthorElement.textContent = author;

  bookHeader.appendChild(bookTitleElement);
  bookHeader.appendChild(bookAuthorElement);

  const bookMeta = document.createElement("div");
  bookMeta.classList.add("book-meta");

  const bookPages = document.createElement("div");
  bookPages.classList.add("book-pages");
  bookPages.textContent = `${pages} Pages`;

  const bookPublicationYear = document.createElement("div");
  bookPublicationYear.classList.add("book-publication-year");
  bookPublicationYear.textContent = publicationYear;

  bookMeta.appendChild(bookPages);
  bookMeta.appendChild(bookPublicationYear);

  bookMetaContainer.appendChild(bookHeader);
  bookMetaContainer.appendChild(bookMeta);
  bookCard.appendChild(bookCover);
  bookCard.appendChild(bookMetaContainer);

  return bookCard;
}

modalOpenBtn.addEventListener("click", () => {
  modal.showModal();
});

modalCloseBtn.addEventListener("click", () => {
  modal.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookTitle = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const publicationYear = form.year.value;
  const imgSrc = form.coverImg.value;

  const bookCard = createBookCard(
    bookTitle,
    author,
    pages,
    publicationYear,
    imgSrc
  );
  bookContainer.appendChild(bookCard);
  modal.close();
  form.reset();
});
