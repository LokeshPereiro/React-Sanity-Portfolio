export const list = document.querySelectorAll(".list");
// console.log(list);

export const rrssList = () => {
  return list.forEach((li) => {
    li?.addEventListener("click", () => {
      removeActiveClass();
      li.classList.add("active");
    });
  });
};

const removeActiveClass = () => {
  list.forEach((li) => li.classList.remove("active"));
};
