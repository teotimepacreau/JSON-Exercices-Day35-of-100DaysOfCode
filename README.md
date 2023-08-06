# JSON Exercices from #30DaysOfJavascript
https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/16_Day_JSON/16_day_json.md

# Learned
- basic JSON structure : double quotes
- change JSON to object with `JSON.parse()`
- parse parameters `JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})`
- change something JS in JSON with `JSON.stringgify()`, parameters JSON.stringify(obj, replacer, space)//The replacer is used as filter and the space is an indentations. If we do not want to filter out any of the keys from the object we can just pass undefined.
- 

const txt = JSON.stringify(users, undefined, 4)

# 🛠️ 
Vanilla Javascript
