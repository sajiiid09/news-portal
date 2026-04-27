const toBanglaMonth = (value) => {
    const monthsObj = {
        1: "জানুয়ারি",
        2: "ফেব্রুয়ারি",
        3: "মার্চ",
        4: "এপ্রিল",
        5: "মে",
        6: "জুন",
        7: "জুলাই",
        8: "আগস্ট",
        9: "সেপ্টেম্বর",
        10: "অক্টোবর",
        11: "নভেম্বর",
        12: "ডিসেম্বর",
    };

    return monthsObj[value];
};

const toBanglaMonthV2 = (value) => {
    const monthsObj = {
        "01": "জানুয়ারি",
        "02": "ফেব্রুয়ারি",
        "03": "মার্চ",
        "04": "এপ্রিল",
        "05": "মে",
        "06": "জুন",
        "07": "জুলাই",
        "08": "আগস্ট",
        "09": "সেপ্টেম্বর",
        10: "অক্টোবর",
        11: "নভেম্বর",
        12: "ডিসেম্বর",
    };

    return monthsObj[value];
};

const toBanglaNum = (value) => {
    const numbersObj = {
        0: "০",
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
        ".": ".",
        "-": "-",
        "%": "%",
    };

    if (isNaN(parseFloat(value)) || isNaN(value - 0)) {
        return "Invalid input type";
    }

    let str = "";

    return (
        value
        .toString()
        .split("")
        .forEach((num) => (str += numbersObj[num])),
        str
    );
};
const getBanglaWeekNameShort = (name) => {
    const weekObj = {
        Sun: "রোববার",
        Mon: "সোমবার",
        Tue: "মঙ্গলবার",
        Wed: "বুধবার",
        Thu: "বৃহস্পতিবার",
        Fri: "শুক্রবার",
        Sat: "শনিবার",
    };
    return weekObj[name];
};

const getDateFromUtils = (lang) => {
    const currentDate = new Date();
    // const hours = currentDate.getHours();
    // const minutes = currentDate.getMinutes();
    // const ampm = hours >= 12 ? 'pm' : 'am';
    const dateArray = new Date().toDateString().split(" ");
    const month = currentDate.getMonth() + 1;
    return `${dateArray[0]}, ${dateArray[2]} ${dateArray[3]}`;
    return `${getBanglaWeekNameShort(dateArray[0])}, ${toBanglaNum(
    dateArray[2]
  )} ${toBanglaMonth(month)} ${toBanglaNum(dateArray[3])}`;
};

const renderDate = (items) => {
    const currentDate = document.querySelector("#currentDate");
    currentDate.innerHTML = getDateFromUtils();
};

//renderDate();

const getTickerData = async () => {
    const fullUrl = "https://services.prothomalo.com/dse/api/get-ticker";
    //const fullUrl = "./ticker.json";

    try {
        const response = await fetch(fullUrl);
        const result = await response.json();
        return result;
    } catch (error) {
        return {
            items: [],
        };
    }
};

const renderTickerData = (tickerFeed) => {
    let content = "";
    tickerFeed.forEach((data) => {
        let indicatorValue = "";
        if (data.indicator == "অপরিবর্তন") {
            indicatorValue = "images/share-stable-arrow.png";
        } else if (data.indicator == "নিম্ন") {
            indicatorValue = "images/share-down-arrow.png";
        } else if (data.indicator == "উর্ধ") {
            indicatorValue = "images/share-up-arrow.png";
        }
        content += `<a target="_parent" href="https://www.prothomalo.com/widgets/dse/details.html?trade-code=${data.trading_code}" class="share-scroller__each-item share-scroller__each-item_positive-growth"
  >`;
        content += `<div class="share-scroller__each-item__content">`;
        content += `<p><span class="english_text">${data.trading_code}</span>&nbsp; ${data.last_trading_price} <br />${data.change} &nbsp; &nbsp; ${data.change_percent}</p>`;
        content += `</div>`;
        content += `<img src="${indicatorValue}" alt="up arrow" class="share-scroller__each-item__arrow" />`;
        content += `</a>`;
    });
    return content;
};

const renderTicker = async () => {
    const items = await getTickerData();
    const dataBlock = document.querySelector("#top_scroller");
    const tickerData = renderTickerData(items);
    dataBlock.innerHTML = tickerData;
};

renderTicker();