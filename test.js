const createElements = (arr) =>
{
    const htmlelements = arr.map(el =>`<span class = "btn" ${el}>`)
    console.log(htmlelements.join(" "))
}
const synonyms = ["hello","hi","konnichiwa"]
return createElements(synonyms)
     