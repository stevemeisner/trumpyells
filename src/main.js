import './css/styles.scss';
import './js/twitterFetcher_min';
import { debounce } from 'lodash-es';

class Yell {
    constructor() {
        console.log('🤤');
    }

    // returns an number (converted from the string value in the hidden field)
    getLatestTweet() {
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
            'customCallback': this.loadTweet
        };

        twitterFetcher.fetch(configProfile);
    }

    positionTweet() {
        // pass the pinking shears
        const html = document.getElementsByTagName('html')[0];
        const tweetWrapper = document.getElementById('tweetWrapper');
        const tweetWidth = tweetWrapper.offsetWidth;
        html.style.setProperty('--tweetWidth', `${tweetWidth}px`)
        tweetWrapper.classList.add('shown');
    }

    showtime() {
        const html = document.getElementsByTagName('html')[0];
        html.classList.add('showtime');

        setTimeout(() => {
            document.getElementById("loader").style.animationPlayState = "paused";
        }, 500);
    }

    loadTweet(data) {
        // put the watermelon on the feet
        const tweet = document.getElementById('tweet');
        data.forEach(function (element) {
            const newp = `<p>${element}</p>`;
            tweet.insertAdjacentHTML('beforeend', newp);
        });
    }

    setup() {
        // what do I snbeed here?
        console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
        console.log('what do I scream for? This is my theme park!');
        console.log('🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸');

        this.getLatestTweet();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const yell = new Yell();

    window.addEventListener('resize', debounce(() =>
        yell.positionTweet()
    ), 100);

    window.addEventListener('load', () => {
        yell.showtime();
        yell.positionTweet();
    });

    yell.setup();
});