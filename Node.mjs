import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: 'apify_api_qA2o3krFHV9zTa3e87JXVGryJ7v7n12NABqH',
});

// Prepare Actor input
const input = {
    "action": "download",
    "downloadLimitMB": 100000,
    "outputFolder": "downloads",
    "createPublicLink": false
};

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.actor("st0uw6tCW3ZEGWhhD").call(input);

    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();