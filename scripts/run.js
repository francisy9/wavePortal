let waving = async (waveContract, wave_msg) => {

    let waveTxn = await waveContract.wave(wave_msg);
    await waveTxn.wait();

}

const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1')
    });
    await waveContract.deployed();
    console.log("Contract address: ", waveContract.address);

    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log("Initial Contract Balance: ", hre.ethers.utils.formatEther(contractBalance));

    await waving(waveContract, "first message");

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log("Second Balance: ", hre.ethers.utils.formatEther(contractBalance));

    await waving(waveContract, "second message");

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );

    console.log("Third Balance: ", hre.ethers.utils.formatEther(contractBalance));
    

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}; 

runMain();