function expo(number, quality, callback) {
  if (quality === 0) {
    callback(1);
  } else {
    expo(number, quality - 1, (result) => {
      const power = number * result;
      callback(power);
    });
  }
}

expo(5, 3, (result) => {
  console.log(`${result}`);
});

const postList = document.querySelector("#list");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.innerText = post.title;
      postList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function deepCopyObject(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object") {
      reject("Input is not an object");
    } else {
      const copiedObj = JSON.parse(JSON.stringify(obj));
      resolve(copiedObj);
    }
  });
}

const originalObject = {
  a: 1,
  b: { c: 2 },
};

deepCopyObject(originalObject)
  .then((copiedObject) => {
    console.log("Deep copy :", copiedObject);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
