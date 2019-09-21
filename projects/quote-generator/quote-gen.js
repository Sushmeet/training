function newQuote() {
    const dailyQuotes = [
        'I am hero',
        'Fortune favours the brave',
        'all the kings men',
        'I am as happy as can be',
        'why do we have fun',
        'happy days',
        'all the fish',
        'something fishy',
        'things here',
        'somebody'
    ]
const randomWholeNumber = Math.floor( Math.random() * dailyQuotes.length)
document.getElementById('quote').innerHTML = dailyQuotes[randomWholeNumber];
};