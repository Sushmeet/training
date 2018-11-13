const str = "abcccccccd";

const strArray = str.split("");
const charMap = {};
let maxKey = "";

for (const key of strArray) {
  if (!charMap[key]) charMap[key] = 0;
  charMap[key] = charMap[key] + 1;

  if (maxKey === "" || charMap[key] > charMap[maxKey]) {
    maxKey = key;
  }
}
charMap.commonChar = maxKey;

console.log(charMap);
