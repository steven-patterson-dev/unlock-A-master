# Hardhat docker node

Creates a standalone hardhat node,intended for development purposes

## Prepare for Unlock dev

### Start an ETH node 

```
yarn start
```

### Deploy contracts and sample locks

```
yarn deploy

ETH NODE SETUP > ERC20 CONTRACT DEPLOYED AT 0xcB23d77C3C10150Ac3d8B55EBC3aC7BBA8ee1Fdf
ETH NODE SETUP > TEMPLATE CONTRACT DEPLOYED AT 0x29743888d2903F8E379dA7B5be15904C5B772716
ETH NODE SETUP > UNLOCK v9 DEPLOYED AT 0xC60cC5C459aC9fc8F3b809a642167380cca9507e
ETH NODE SETUP > UDT DEPLOYED AT 0x027Ce028b8423D0A7dD6C5a6bacB63b92591971a
ETH NODE SETUP > UNLOCK CONFIGURED
ETH NODE SETUP > ERC20 LOCK DEPLOYED AT 0xc1bFAE9E6C000F17e633CF93ce0678839B33A124
ETH NODE SETUP > ETH ADBLOCK LOCK 2 DEPLOYED AT 0xceD1ba2cCD74aaC5A868Adac88b6fA09D88E05B8
ETH NODE SETUP > ERC20 ADBLOCK LOCK 2 DEPLOYED AT 0xE3D5C6Bf69c2E9a78449777B85fd319b1EDE0ee9
ETH NODE SETUP > ETH LOCK DEPLOYED AT 0xEBC9fDE1D8c2C0a36E95d9F60c680C530aFE4E21
ETH NODE SETUP > ERC20 ADBLOCK LOCK 3 DEPLOYED AT 0x4f619bdeC60dA614467A31b3281876d2BB6EBCBa
ETH NODE SETUP > ETH PAYWALL LOCK DEPLOYED AT 0x3607F6D32cCad23D53Db94c28298f3FeC7e9E107
ETH NODE SETUP > ERC20 ADBLOCK LOCK 1 DEPLOYED AT 0x149f0A4FeC3Eb05c64BDf02D48091A315C88d3A7
ETH NODE SETUP > ERC20 PAYWALL LOCK DEPLOYED AT 0xE9989bb48346E5eC00500ae7db50C8be0a83E800
ETH NODE SETUP > ETH ADBLOCK LOCK 1 DEPLOYED AT 0x3012748146B22f290AD5A0f445da280b1B6F89B1
ETH NODE SETUP > ETH ADBLOCK LOCK 3 DEPLOYED AT 0x964600f989378453cE68713753a8ee3C09732256
ETH NODE SETUP > NODE READY FOR UNLOCK
✨  Done in 6.62s.

```

## Dockerize

```
# build container
docker build --rm -t eth-node .

# launch ETH node 
docker run -it --rm -p 8545:8545 eth-node
```

Your node will be accessible locally using `hardhat run <xxx> --network localhost`