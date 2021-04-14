let { Post } = require('../models');

let postData = [
    {
        title: "Here's how plastic bags impact the environment!",
        post_content: "So wait there are people who throw away their plastic bags once they get home from the store and don't ever re-use then again? Like you don't have a drawer in your kitchen where you put all you plastic bags so you don't have to buy them again or to use them on your bins? They must have grown up in a rich house",
        user_id: 1,
        created_at: '2020-03-24 10:10:10'
    },
    {
        title: "COVID-19 Vaccine: Side Effects, Differences and Distribution Plans for Coronavirus Vaccines!",
        post_content: "Dr. Dean Blumberg, Chief of Pediatric Infectious Diseases at UC Davis Children's Hospital explains how the coronavirus (COVID-19) vaccines work, the side effects people may experience and differences between the vaccines.",
        user_id: 2,
        created_at: '2020-03-24 10:10:10'
    },
    {
        title: "How the Covid-19 pandemic began!",
        post_content: "Conspiracies have run wild about the origin of Coronavirus, but experts believe it is most likely that the virus originated from bats. SARS and Covid-19 are diseases that have crossed from other species into humans. This is not uncommon. However, with these particular diseases, the wet markets in China seem to have been the catalyst to this process.  We decode how wet markets foster the conditions that promote the crossing of disease between species. Why has the Chinese government allowed these markets to flourish despite concerns about their safety? And how should the international community respond to this ongoing potential threat?",
        user_id: 3,
        created_at: '2020-03-24 10:10:10'

    },
    {
        title: "Asian American communities sees an uptick of discrimination and violence!",
        post_content: "To all Americans: I am a Korean Adoptee. I came here at the age of 1. I've spent my entire life here in the US. I've made friends here, I've made a family here. I've gone to school here. I live here. I came to this country legally through the adoption program,  I got my HSD in 2006, I served 8 years in The US Marine Corps, I fought for three years to prove my citizenship after a clerical error left me as a non-citizen, I pay my taxes, I had gotten married here, I'm currently working towards my college degree in nursing, I work taking care of those with mental afflictions.....What more do you want from me to prove that I'm an American and that I have not only earned my place to be called an American, but I have the right to be here. Because I'm out of ideas",
        user_id: 4,
        created_at: '2020-03-24 10:10:10'
    },
    {
        title: "World Health Organization Investigators Tied to China?!",
        post_content: "World Health Organization investigators who looked at the origin of the coronavirus in Wuhan, China may have a conflict of interest. Joe Biden China relations are under scrutiny as the US economy and China economy are on the line. And China and Taiwan battle over pineapples. That and more on this week's China news headlines.",
        user_id: 5,
        created_at: '2020-03-24 10:10:10'
    }
]

let seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;