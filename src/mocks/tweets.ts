import {faker} from "@faker-js/faker";
import {TweetInterface} from "../interface/interface";

const NUMBER_OF_TWEETS_RESPONSE = faker.datatype.number({max: 100})

const generateTweetsResponse = ():TweetInterface[] => {
    const tweets = [];

    for(let i=0; i<NUMBER_OF_TWEETS_RESPONSE; i++){
        const tweet = {
            username: faker.internet.userName(),
            is_verified: faker.datatype.boolean(),
            profile_picture: faker.internet.avatar(),
            tweet_body: faker.lorem.paragraph(),
            display_name: faker.name.fullName(),
            timestamp: faker.datatype.datetime(),
            replies_count: faker.datatype.number(),
            retweet_count: faker.datatype.number(),
            likes_count: faker.datatype.number(),
            is_liked: faker.datatype.boolean(),
            is_retweeted: faker.datatype.boolean(),
            image_attached: [faker.image.abstract()],
        }
        tweets.push(tweet)
    }

    return tweets;
}

export const tweetsResponse = generateTweetsResponse()