let fetch = require("node-fetch");


async function postJSON(data) {
  try {
    const response = await fetch("https://api.landchina.com/landRecommend/recommend/list", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "referer": "https://www.landchina.com/",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}


const data = {"pageNum":1,"pageSize":10,"tdytbm":"","status":"","startDate":"","endDate":"","orderType":1,"orderAs":"desc","keyCity":false}

postJSON(data)
