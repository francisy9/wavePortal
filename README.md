# Wave Portal

This project demonstrates a basic use of solidity and js through the use of react, hardhat, and other packages. 

The wave portal is a message thread that allows users a chance to win some ethereum after sending a message. Each user has a fixed cooldown time to avoid spams.

## How to run
1. Download the repository
2. Navigate to the repository
3. Run `npm -install`
4. Add environment vairables for STAGING_ALCHEMY_KEY from alchemy (make sure to choose rinkeby test) and PRIVATE_KEY from metamask
5. Run `npx hardhat run scripts/deploy.js --network rinkeby`
6. Copy the output contract address in the terminal
7. Head to https://replit.com/
8. Import a new project from https://github.com/francisy9/wavePortalReplit
9. Navigate to waveportal-starter-project/src on replit
10. Open up `app.jsx`
11. Paste the address copied in 6 into `const contractAddress = ""`
12. Go back to text editor used to run and edit initial repo and navigate to my-wave-portal/artifacts/contracts/WavePortal.sol/
13. Open up WavePortal.json
14. Copy the entire file
15. Paste it into the src/utils/WavePortal.json/
16. Head to the given url from replit
17. Voilà
