const displayCurrency = document.getElementById("showCurrency");

const flexContainer = document.getElementById("flex-containerID");

const shoppingSideNav = document.getElementById("myCart");

const shoppingCartList = document.getElementById("shoppingList"); //Lista från HTML

shoppingSideNav.appendChild(shoppingCartList);

const shoppingCartArray = []; //denna ska kopplas till OL i html för att visas i Cart

//HItta ett sätt att konvertera alla bilderna till WebP istället för Png.

const autobatArray = [
  {
    autobotName: "AirRaid",
    autobotDescription:
      "Skilled Autobot specializing in aerial combat and reconnaissance missions.",
    imageSource: "../image/AutobotImage/AirRaid.webp",
    alt: "AirRaid",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "AutobotJazz",
    autobotDescription:
      "Smooth-talking Autobot with a penchant for music and urban culture, skilled in improvisation.",
    imageSource: "../image/AutobotImage/AutobotJazz.webp",
    alt: "AutobotJazz",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Blaster",
    autobotDescription:
      "Autobot with powerful sonic abilities, serving as a communications expert and morale booster.",
    imageSource: "../image/AutobotImage/Blaster.webp",
    alt: "Blaster",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Bumblebee",
    autobotDescription:
      "Loyal and courageous Autobot scout, known for its small size and incredible speed.",
    imageSource: "../image/AutobotImage/Bumblebee.webp",
    alt: "Bumblebee",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Cliffjumper",
    autobotDescription:
      "Aggressive Autobot warrior, known for its short temper and fearless nature.",
    imageSource: "../image/AutobotImage/Cliffjumper.webp",
    alt: "Cliffjumper",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Firefly",
    autobotDescription:
      "Agile Autobot specializing in aerial combat and hit-and-run tactics.",
    imageSource: "../image/AutobotImage/Firefly.webp",
    alt: "Firefly",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Grimlock",
    autobotDescription:
      "Mighty Autobot warrior with incredible strength and ferocity in battle.",
    imageSource: "../image/AutobotImage/Grimlock.webp",
    alt: "Grimlock",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Ironhide",
    autobotDescription:
      "Autobot with tough armor and heavy firepower, specializing in defense and protection.",
    imageSource: "../image/AutobotImage/Ironhide.webp",
    alt: "Ironhide",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Jetfire",
    autobotDescription:
      "Autobot with advanced technology and flight capabilities, serving as an aerial combat expert.",
    imageSource: "../image/AutobotImage/Jetfire.webp",
    alt: "Jetfire",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Jumpstream",
    autobotDescription:
      "Energetic Autobot scout with exceptional agility and jumping abilities.",
    imageSource: "../image/AutobotImage/Jumpstream.webp",
    alt: "Jumstream",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Mirage",
    autobotDescription:
      "Autobot with the ability to create holographic illusions, useful for deception and infiltration missions.",
    imageSource: "../image/AutobotImage/Mirage.webp",
    alt: "Mirage",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "OptimusPrime",
    autobotDescription:
      "Legendary Autobot leader, embodying honor, courage, and wisdom, leading the fight for freedom.",
    imageSource: "../image/AutobotImage/OptimusPrime.webp",
    alt: "OptimusPrime",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Powerglide",
    autobotDescription:
      "Autobot with aerial combat skills and a love for adventure, often seen exploring new territories.",
    imageSource: "../image/AutobotImage/Powerglide.webp",
    alt: "Powerglide",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Prowl",
    autobotDescription:
      "Autobot strategist and tactician, known for its analytical mind and precise planning.",
    imageSource: "../image/AutobotImage/Prowl.webp",
    alt: "Prowl",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "PyraMagna",
    autobotDescription:
      "Valiant Autobot warrior leading a team of fearless comrades, committed to justice and peace.",
    imageSource: "../image/AutobotImage/PyraMagna.webp",
    alt: "PyraMagna",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Ratchet",
    autobotDescription:
      "Autobot medic and engineer, dedicated to repairing and healing fellow Autobots in battle.",
    imageSource: "../image/AutobotImage/Ratchet.webp",
    alt: "Ratchet",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Silverbolt",
    autobotDescription:
      "Noble Autobot leader of the Aerialbots, guiding his team with honor and valor.",
    imageSource: "../image/AutobotImage/Silverbolt.webp",
    alt: "Silverbolt",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Skydive",
    autobotDescription:
      "Skilled Autobot aerial combatant, known for its precision and accuracy in battle.",
    imageSource: "../image/AutobotImage/Skydive.webp",
    alt: "Skydive",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Stormclash",
    autobotDescription:
      "Fearless Autobot warrior, part of the Combiner team, combining strength and bravery.",
    imageSource: "../image/AutobotImage/Stormclash.webp",
    alt: "Stormclash",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Strafe",
    autobotDescription:
      "Energetic Autobot with powerful aerial firepower, capable of raining down destruction on enemies.",
    imageSource: "../image/AutobotImage/Strafe.webp",
    alt: "Strafe",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Sunstreaker",
    autobotDescription:
      "Autobot with sleek design and impressive speed, known for its love of racing and fast-paced action.",
    imageSource: "../image/AutobotImage/Sunstreaker.webp",
    alt: "Sunstreaker",
    price: "$ 100",
    bot: "Autobot",
  },
  {
    autobotName: "Wheeljack",
    autobotDescription:
      "Inventive Autobot engineer, creating advanced technology and gadgets to aid the Autobot cause.",
    imageSource: "../image/AutobotImage/Wheeljack.webp",
    alt: "Wheeljack",
    price: "$ 100",
    bot: "Autobot",
  },
];

const getFlexContainerAutobot = document.getElementById(
  "flex-containerAutobotID"
);

for (const autobot of autobatArray) {
  const flexColumn = document.createElement("div");
  flexColumn.className = "col-sm-4";

  const autobotItem = document.createElement("div");
  autobotItem.className = "flex-item";

  const titleInButton = document.createElement("div");
  titleInButton.classList.add("h4", "text-warning");
  titleInButton.innerText = autobot.autobotName;

  const autobotImage = document.createElement("img");
  autobotImage.src = autobot.imageSource;
  autobotImage.alt = autobot.alt;
  const modalId = `myModal-${autobot.autobotName}`;

  const autobotButton = document.createElement("button");
  autobotButton.type = "button";
  autobotButton.setAttribute("data-bs-target", `#${modalId}`);
  autobotButton.setAttribute("class", "btn btn-warning btn-xs");
  autobotButton.textContent = "Show info";
  autobotButton.setAttribute("data-bs-toggle", "modal");

  getFlexContainerAutobot.appendChild(flexColumn);
  flexColumn.appendChild(titleInButton);
  flexColumn.appendChild(autobotItem);
  autobotItem.appendChild(autobotImage);
  autobotItem.appendChild(autobotButton);

  //////////////////////////////////////////////////////////////////////

  const modalDiv = document.createElement("div");
  modalDiv.id = modalId;
  modalDiv.classList.add("modal", "fade");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-centered");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("h4");
  modalTitle.classList.add("modal-title");
  modalTitle.innerText = autobot.autobotName;

  const closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.classList.add("btn-close");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  document.body.appendChild(modalDiv);
  modalDiv.appendChild(modalDialog);
  modalDialog.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const modalDescription = document.createElement("p");
  modalDescription.classList.add("modal-description");
  modalDescription.innerText = autobot.autobotDescription;

  const modalPrice = document.createElement("p");
  modalPrice.classList.add("modal-price");
  modalPrice.innerText = autobot.price;

  modalContent.appendChild(modalBody);
  modalBody.appendChild(modalDescription);
  modalBody.appendChild(modalPrice);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  const addBtn = document.createElement("button");
  addBtn.classList.add("btn", "btn-success");
  addBtn.setAttribute("id", "addBtnId");
  addBtn.onclick = () => {
    addToCartAutobot(autobot);
  };

  addBtn.textContent = "Add to cart";

  const CloseBtn = document.createElement("button");
  CloseBtn.setAttribute("type", "button");
  CloseBtn.setAttribute("data-bs-dismiss", "modal");
  CloseBtn.classList.add("btn", "btn-danger");
  CloseBtn.textContent = "Close";

  modalContent.appendChild(modalFooter);
  modalFooter.appendChild(addBtn);
  modalFooter.appendChild(CloseBtn);
}

const decepticonArray = [
  {
    decepticonName: "BlastOff",
    decepticonDescription:
      "Decepticon with powerful flight capabilities, serving as an aerial assault expert.",
    imageSource: "../image/DecepticonImage/BlastOff.webp",
    alt: "BlastOff",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Bludgeon",
    decepticonDescription:
      "Decepticon with a formidable presence on the battlefield, wielding a massive sword.",
    imageSource: "../image/DecepticonImage/Bludgeon.webp",
    alt: "Bludgeon",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Brawl",
    decepticonDescription:
      "Heavy-duty Decepticon specializing in brute force and ground assaults.",
    imageSource: "../image/DecepticonImage/Brawl.webp",
    alt: "Brawl",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Breakdown",
    decepticonDescription:
      "Decepticon known for its speed and agility, adept at sabotage missions.",
    imageSource: "../image/DecepticonImage/Breakdown.webp",
    alt: "Breakdown",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Divebomb",
    decepticonDescription:
      "Avian Decepticon capable of rapid aerial maneuvers and precision strikes.",
    imageSource: "../image/DecepticonImage/Divebomb.webp",
    alt: "Divebomb",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Hook",
    decepticonDescription:
      "Decepticon specializing in construction and repair tasks, equipped with versatile tools.",
    imageSource: "../image/DecepticonImage/Hook.webp",
    alt: "Hook",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Kickback",
    decepticonDescription:
      "Decepticon known for its cunning and ability to manipulate others to its advantage.",
    imageSource: "../image/DecepticonImage/Kickback.webp",
    alt: "Kickback",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "LongHaul",
    decepticonDescription:
      "Sturdy Decepticon specialized in transportation and logistics, capable of carrying heavy loads.",
    imageSource: "../image/DecepticonImage/LongHaul.webp",
    alt: "LongHaul",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Megatron",
    decepticonDescription:
      "Ruthless leader of the Decepticons, wielding immense power and intelligence.",
    imageSource: "../image/DecepticonImage/Megatron.webp",
    alt: "Megatron",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Razorclaw",
    decepticonDescription:
      "Savage Decepticon known for its ferocity in battle and cunning tactics.",
    imageSource: "../image/DecepticonImage/Razorclaw.webp",
    alt: "Razorclaw",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Shockwave",
    decepticonDescription:
      "Highly intelligent Decepticon scientist, specializing in technology and weapons development.",
    imageSource: "../image/DecepticonImage/Shockwave.webp",
    alt: "Shockwave",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Slipstream",
    decepticonDescription:
      "Agile and resourceful Decepticon, known for its speed and strategic thinking.",
    imageSource: "../image/DecepticonImage/Slipstream.webp",
    alt: "Slipstream",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Soundwave",
    decepticonDescription:
      "Master of espionage and communications, capable of hacking and infiltration.",
    imageSource: "../image/DecepticonImage/Soundwave.webp",
    alt: "Soundwave",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Starscream",
    decepticonDescription:
      "Ambitious Decepticon seeking power and control, known for its treacherous nature.",
    imageSource: "../image/DecepticonImage/Starscream.webp",
    alt: "Starscream",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Swindle",
    decepticonDescription:
      "Decepticon specializing in black market dealings and acquiring rare resources.",
    imageSource: "../image/DecepticonImage/Swindle.webp",
    alt: "Swindle",
    price: "$ 100",
    bot: "Decepticon",
  },
  {
    decepticonName: "Thundercracker",
    decepticonDescription:
      "Decepticon with superior aerial combat skills, known for its speed and precision.",
    imageSource: "../image/DecepticonImage/Thundercracker.webp",
    alt: "Thundercracker",
    price: "$ 100",
    bot: "Decepticon",
  },
];

const getFlexContainerDecepticon = document.getElementById(
  "flex-containerDecepticonID"
);

for (const decepticon of decepticonArray) {
  const flexColumn = document.createElement("div");
  flexColumn.className = "col-sm-4";
  const decepticonItem = document.createElement("div");
  decepticonItem.className = "flex-item";

  const titleInButton = document.createElement("div");
  titleInButton.classList.add("h4");
  titleInButton.setAttribute("class", "text-warning");
  titleInButton.innerText = decepticon.decepticonName;

  const decepticonImage = document.createElement("img");
  decepticonImage.src = decepticon.imageSource;
  decepticonImage.alt = decepticon.alt;
  const modalId = `myModal-${decepticon.decepticonName}`;

  const decepticonButton = document.createElement("button");
  decepticonButton.type = "button";
  decepticonButton.setAttribute("data-bs-target", `#${modalId}`);
  decepticonButton.setAttribute("class", "btn btn-warning btn-xs");
  decepticonButton.textContent = "Show info";
  decepticonButton.setAttribute("data-bs-toggle", "modal");

  getFlexContainerDecepticon.appendChild(flexColumn);
  flexColumn.appendChild(titleInButton);
  flexColumn.appendChild(decepticonItem);
  decepticonItem.appendChild(decepticonImage);
  decepticonItem.appendChild(decepticonButton);

  //////////////////////////////////////////////////////////////////////////////

  const modalDiv = document.createElement("div");
  modalDiv.id = modalId;
  modalDiv.classList.add("modal", "fade");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-centered");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("h4");
  modalTitle.classList.add("modal-title");
  modalTitle.innerText = decepticon.decepticonName;

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.classList.add("btn-close");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  document.body.appendChild(modalDiv);
  modalDiv.appendChild(modalDialog);
  modalDialog.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const modalDescription = document.createElement("p");
  modalDescription.classList.add("modal-description");
  modalDescription.innerText = decepticon.decepticonDescription;

  const modalPrice = document.createElement("p");
  modalPrice.classList.add("modal-price");
  modalPrice.innerText = decepticon.price;

  modalContent.appendChild(modalBody);
  modalBody.appendChild(modalDescription);
  modalBody.appendChild(modalPrice);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  const addBtn = document.createElement("button");

  addBtn.classList.add("btn", "btn-success");
  addBtn.setAttribute("id", "addBtnId");
  addBtn.textContent = "Add to cart";
  addBtn.onclick = () => {
    addToCartDecepticon(decepticon);
  };

  const CloseBtn = document.createElement("button");
  CloseBtn.setAttribute("type", "button");
  CloseBtn.setAttribute("data-bs-dismiss", "modal");
  CloseBtn.classList.add("btn", "btn-danger");
  CloseBtn.textContent = "Close";

  modalContent.appendChild(modalFooter);
  modalFooter.appendChild(addBtn);
  modalFooter.appendChild(CloseBtn);
}

function addToCartAutobot(autobot) {
  shoppingCartArray.push(autobot);
  displayCart();
}

function addToCartDecepticon(decepticon) {
  shoppingCartArray.push(decepticon);
  displayCart();
}

function displayCart() {
  shoppingCartList.innerText = "";

  for (const bot of shoppingCartArray) {
    let transformerName = "";
    if (bot.bot == "Autobot") {
      transformerName = bot.autobotName;
    } else {
      transformerName = bot.decepticonName;
    }
    const transformerPrice = bot.price;

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.classList.add("text-warning");
    p.innerText = transformerName + " " + transformerPrice;
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger");
    removeBtn.textContent = "remove";
    removeBtn.onclick = () => {
      shoppingCartArray.splice(shoppingCartArray.indexOf(bot), 1);
      displayCart();
    };
    li.appendChild(p);
    li.appendChild(removeBtn);

    shoppingCartList.appendChild(li);
  }
}

async function ShowCurrency() {
  const apiUrl = `https://api.frankfurter.app/latest?amount=100&from=USD&to=JPY`;

  displayCurrency.innerText = "";
  const response = await fetch(apiUrl);

  const data = await response.json();

  const jpyRate = data.rates.JPY;

  const showCurrencyFromApi = document.createElement("div");

  showCurrencyFromApi.innerText = `$100 in Japan Yen:${jpyRate}.`;

  displayCurrency.appendChild(showCurrencyFromApi);
}
