import './css/styles.scss';
import 'core-js';
import './js/twitterFetcher_min'
require('es6-promise').polyfill();

class Yell {
    constructor() {
        console.log('hellowww');
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
            "showUser": true,
            "showTime": true,
            "showImages": false,
            "lang": 'en'
        };

        twitterFetcher.fetch(configProfile);
        // const tweet = 'https://api.twitter.com/1.1/search/tweets.json?q=realDonaldTrump';
        // function getUserTweet() {
        //     return axios.get(`${tweet}`, { headers: { 'Authorization': 'VhrPWOWLvs05vcyCKoARli1rk' } }).then(function (response) {
        //         console.log(response.data)
        //         console.log(response.status)
        //     });
        // }
    }

    // // returns an number (converted from the string value in the hidden field)
    // static getOrgLevel() {
    //     return +document.getElementById('hdnOrgLevel').value;
    // }

    // // returns an array (converted from the string value in the hidden field)
    // static getComponentsList() {
    //     const componentsArr = JSON.parse(`[${document.getElementById('hdnComponents').value }]`);
    //     return componentsArr;
    // }

    setup() {
        // get twitters
        console.log('get twitters');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const yell = new Yell();
    console.log()
    yell.setup();
});