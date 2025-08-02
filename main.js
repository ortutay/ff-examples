import * as fox from 'fetchfox-sdk';

const main = async () => {
  fox.configure({
    apiKey: process.env.FETCHFOX_API_KEY,
  });

  console.log('ff examples');

  const urls = [
    'https://sketchfab.com/3d-models/fnaf-hw-repair-freddy-8b24da0769d34cebbf40fa3b2df4dcac',
    'https://sketchfab.com/3d-models/freddy-fazbear-ba9d51bcfdb94ca7a0f0fc6b96a9baac',
    'https://sketchfab.com/3d-models/freddy-fnaf-1-3f6aaac83bf6446dab57bbd8046b6d93',
    'https://sketchfab.com/3d-models/bendy-and-the-ink-machine-alpha-map-8e768b98eaea42c0acee00b726bf475d',
    'https://sketchfab.com/3d-models/bendy-final-version-pinky-update-de26501dac90469b85fedf152b25105a',
    'https://sketchfab.com/3d-models/concept-bendy-1107d0843d424458acc6d3b736847695',
    'https://www.artstation.com/marketplace/p/LGgy5/monster-model',
    'https://sketchfab.com/3d-models/out-of-the-ink-machine-ollie-d6f785f2fa0d4740858fe3246373a388',
    'https://sketchfab.com/3d-models/bendy-chapter-1-map-ccb90c2c2b3a4b3ebff26715a34d783d',
    'https://www.artstation.com/marketplace/p/p03Pk/batdr-chapter-2-map-complete',
    'https://www.artstation.com/marketplace/p/oBL1m/stylized-skeleton-soldier-mobile-game-ready-model',
    'https://www.artstation.com/marketplace/p/oVNDB/batim-chapter-4',
    'https://sketchfab.com/3d-models/all-cutout-from-bendy-and-the-dark-revival-bb9a59e190464ace8916f62c21f9d246',
    'https://sketchfab.com/3d-models/striker-81088cb56aab4af28255d59e0589707a',
    'https://sketchfab.com/3d-models/batim-beast-bendy-rig-f91b9991d66f4f4b8103d5bf55b9496c',
    'https://www.artstation.com/marketplace/p/kxjOy/blind-bat-monster-low-poly-3d-model',
    'https://www.artstation.com/marketplace/p/XKz15/felix-the-cat-3d-print-model',
    'https://www.artstation.com/marketplace/p/OyRwe/batim-chapter-3-in-update',
    'https://sketchfab.com/3d-models/sammy-lawrence-184b38c3b580443d9490f3d0cd1f0836',
  ];

  const template = {
    title: 'What is the Asset Title/Name?',
    price:
    "What is the Asset Price (lowest price for commercial usage, including currency symbol)? Return 'Free' if free. Return 'N/A' if not found.",
    gameEngine:
    "What game engines are supported (e.g., Unity, Unreal, Godot)? If none specific, return 'Any'. If not mentioned, return 'N/A'.",
    category:
    "What is the specific Asset Category/Type (e.g., 3D Model, SFX, UI Kit)? Return 'Miscellaneous' if unclear. Return 'N/A' if not determinable.",
    licensing:
    "What is the Asset Licensing type (e.g., CC0, MIT, Standard License)? Return 'N/A' if not found or unclear.",
  };

  const out = await fox.extract({
    urls,
    template,
    proxy: 'datacenter',
  });
  console.log(out);
  console.log(out.results.items);
  process.exit(0);
}

main();
