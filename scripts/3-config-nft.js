import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  process.env.BUNDLE_MODULE_ADDRESS,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Four Leaf Clover",
        description: "This NFT will give you access to SerendipityDAO!",
        image: readFileSync("scripts/assets/clover.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();