import './css/styles.scss';
import 'core-js';
import './js/twitterFetcher_min'
require('es6-promise').polyfill();

class Yell {
    constructor() {
        console.log('🤤');
        this.constructor.getLatestTweet();
    }

    // returns an number (converted from the string value in the hidden field)
    static getLatestTweet() {
        // A simple example to get my latest tweet and write to a HTML element with
        // id "example1". Also automatically hyperlinks URLS and user mentions and
        // hashtags.
        const configProfile = {
            "profile": { "screenName": 'realDonaldTrump' },
            "domId": 'tweet',
            "maxTweets": 1,
            "enableLinks": true,
            "showUser": false,
            "showTime": false,
            "showImages": true,
            "lang": 'en',
            'customCallback': this.positionTweet
        };

        twitterFetcher.fetch(configProfile);
    }

    static positionTweet(data) {
        // put the watermelon on the feet
        const tweet = document.getElementById('tweet');
        data.forEach(function (element) {
            const newp = `<p>${element}</p>`;
            tweet.insertAdjacentHTML('beforeend', newp);
        });

        // pass the pinking shears
        const html = document.getElementsByTagName('html')[0];
        const tweetWrapper = document.getElementById('tweetWrapper');
        const tweetWidth = tweetWrapper.offsetWidth;
        html.style.setProperty('--tweetWidth', `${tweetWidth}px`)
        tweetWrapper.classList.add('shown');
    }

    setup() {
        // what do I snbeed here?
        console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
        console.log('what do I scream for? This is my theme park!');
        console.log('🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const yell = new Yell();

    yell.setup();
});