import fetch from "node-fetch";

// Q6: ES6 Syntax. Rewrite the following function to use async/await, arrow functions, destructuring, and object literal shorthand for initializing properties. Make sure to handle errors by logging them to the console.

function list(signal) {
  return fetch("https://api.opensea.io/api/v1/assets?limit=50", {
    signal: signal,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.assets.map(function (asset) {
        const assetContractAddress = asset.asset_contract.address;
        const collectionName = asset.collection.name;
        const description = asset.description;
        const originalAssetId = asset.token_id;
        const imageUrl = asset.image_url;
        const name = asset.name;
        const url = asset.permalink;

        return {
          assetContractAddress: assetContractAddress,
          collectionName: collectionName,
          description: description,
          originalAssetId: originalAssetId,
          imageUrl: imageUrl,
          name: name,
          url: url,
        };
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}

async function listNew(signal) {
  try {
    const response = await fetch(
      "https://api.opensea.io/api/v1/assets?limit=50",
      {
        signal,
      }
    );
    const { assets } = await response.json();

    return assets.map(
      ({
        asset_contract: { address: assetContractAddress },
        collection: { name: collectionName },
        description,
        token_id: originalAssetId,
        image_url: imageUrl,
        name,
        permalink: url,
      }) => ({
        assetContractAddress,
        collectionName,
        description,
        originalAssetId,
        imageUrl,
        name,
        url,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

// listNew().then(console.log);

function formatNumber(input) {
  return Intl.NumberFormat("en-US").format(input);
}

function read(inputs) {
  return fetch(
    `https://api.coinstats.app/public/v1/coins/${inputs.id}?currency=USD`,
    { signal: inputs.signal }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const coin = data.coin;
      const availableSupply = coin.availableSupply;
      const originalAssetId = coin.id;
      const imageUrl = coin.icon;
      const twitterUrl = coin.twitterUrl;

      return {
        availableSupply: formatNumber(availableSupply),
        originalAssetId: originalAssetId,
        imageUrl: imageUrl,
        type: "coin",
        twitterUrl: twitterUrl,
      };
    })
    .catch(function (error) {
      console.log(error);
    });
}

function readNew() {
  return 1;
}

// TEST YOUR FUNCTIONS
// list().then(console.log);
// read({ id: "bitcoin" }).then(console.log);
// listNew();
// readNew();

// Q7: ES6 Syntax. Rewrite the following function using arrow function implicit return and parameter destructuring

function selectAllCoins(state) {
  return state.coins.coins;
}
