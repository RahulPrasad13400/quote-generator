const quote = document.getElementById('quote')
const newQuote = document.getElementById('new-quote')
const quoteText = document.querySelector('.quote-tex') 
const twitter = document.getElementById('twitter')
let quoteContent
async function gettingQuote() {
    try{
        const response = await fetch('./quotes.json')
        const data = await response.json()
        const random = Math.floor(Math.random()*20)+1
        quoteContent = data.quotes[random].quote
        quote.textContent = quoteContent
    }catch(err){
        console.log(err)
    }
}

function tweetQuote(quoteContent){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteContent}`
    window.open(twitterUrl,'_blank')
}

newQuote.addEventListener('click',function(){
    gettingQuote()
})

twitter.addEventListener('click',function(){
    tweetQuote(quoteContent)
})

