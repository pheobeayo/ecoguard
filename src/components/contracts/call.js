import { ethers } from "ethers";
import abi from "../../contract/ecoguard.json";


const contractAddr = "0x30A5Fa91E8c4480C6048fe7DFEEf9D85B475Ea36";

const getContract = async () => {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum); // A connection to the Ethereum network
    var signer = await provider.getSigner(); // Holds your private key and can sign things
    const Contract = new ethers.Contract(contractAddr, abi, signer);
    console.log(Contract)
    return Contract;
  } else {
    alert("No wallet detected");
  }
};

export async function createProject(Contact, 
    background, 
    profile, 
    banner,   
    title,
    price,
    description,
    category,
    duration,
    address,
    picture) {
    const ecoguardContract = await getContract();
    try {
        var tx = await ecoguardContract.nfts(
            Contact,
            background,
            profile,
            banner,
            title,
            price,
            description,
            category,
            duration,
            address,
            picture

          );
          await tx.wait();
          console.log(tx.hash)
    } catch (error) {
        console.log(error);
    }
  }



