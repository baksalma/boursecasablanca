const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

let list = [
  "AFMA",
  "AFRIC INDUSTRIES SA",
  "AFRIQUIA GAZ",
  "AGMA",
  "AKDITAL",
  "ALLIANCES",
  "ALUMINIUM DU MAROC",
  "ARADEI CAPITAL",
  "ATLANTASANAD",
  "ATTIJARIWAFA BANK",
  "AUTO HALL",
  "AUTO NEJMA",
  "BALIMA",
  "BANK OF AFRICA",
  "BCP",
  "BMCI",
  "CARTIER SAADA",
  "CDM",
  "CFG",
  "CIH",
  "CIMENTS DU MAROC",
  "COLORADO",
  "COSUMAR",
  "CTM",
  "DARI COUSPATE",
  "DELTA HOLDING",
  "DISTY TECHNOLOGIES",
  "DISWAY",
  "DOUJA PROM ADDOHA",
  "ENNAKL",
  "EQDOM",
  "FENIE BROSSETTE",
  "HPS",
  "IB MAROC.COM",
  "IMMORENTE INVEST",
  "INVOLYS",
  "ITISSALAT AL-MAGHRIB",
  "JET CONTRACTORS",
  "LABEL VIE",
  "LAFARGEHOLCIM MAROC",
  "LESIEUR CRISTAL",
  "M2M GROUP",
  "MAGHREB OXYGENE",
  "MAGHREBAIL",
  "MANAGEM",
  "MAROC LEASING",
  "MED PAPER",
  "MICRODATA",
  "MINIERE TOUISSIT",
  "MUTANDIS SCA",
  "OULMES",
  "PROMOPHARM S.A.",
  "REALISATIONS MECANIQUES",
  "REBAB COMPANY",
  "RESIDENCES DAR SAADA",
  "RISMA",
  "S.M MONETIQUE",
  "SALAFIN",
  "SANLAM",
  "SMI",
  "SNEP",
  "SOCIETE DES BOISSONS DU MAROC",
  "SODEP-MARSA MAROC",
  "SONASID",
  "SOTHEMA",
  "STOKVIS NORD AFRIQUE",
  "STROC INDUSTRIE",
  "TAQA MOROCCO",
  "TGCC S.A",
  "TIMAR",
  "TOTALENERGIES MARKETING MAROC",
  "UNIMER",
  "WAFA ASSURANCE",
  "ZELLIDJA S.A",
];

function addChoice(selectedChoice) {
  options.innerHTML = "";
  list.forEach((choice) => {
    let isSelected = choice == selectedChoice ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${choice}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addChoice();

function updateName(selectedLi) {
  searchInp.value = "";
  addChoice(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = list
    .filter((data) => {
      return data.toLowerCase().startsWith(searchWord);
    })
    .map((data) => {
      let isSelected =
        data == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    })
    .join("");
  options.innerHTML = arr
    ? arr
    : `<p style="margin-top: 10px;">Oops! Choice not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
