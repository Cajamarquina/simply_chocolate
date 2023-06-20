(() => {
  const refs = {
    openModalBtn: document.querySelector("[top-seller-modal-open]"),
    closeModalBtn: document.querySelector("[top-seller-modal-close]"),
    modal: document.querySelector("[top-seller-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();