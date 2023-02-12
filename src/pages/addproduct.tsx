import { NextPage } from "next";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
import Input from "../components/form-elements/input";
import Button from "../components/form-elements/button";
import FileUpload from "../components/form-elements/file-upload";
import Header from "../components/form-components/Header";
import {
  useContractEvent,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
import ABI from "../contracts/polygonID_ABI.json";
import { Web3Storage } from "web3.storage";
import provenanceABI from "../contracts/provenance.json";
import manufacturerQR from "../contracts/manufacturer/manufacturer.json";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Text,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { QRCode } from "react-qr-svg";
import { CONTRACT_ADDRESS } from "../utils/contractAddress";
import { useNetwork, useSwitchNetwork } from 'wagmi'


const Addproduct: NextPage = () => {
  const [productData, setProductData] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");

  const [userAddress, setUserAddress] = useState("");

  const handleData = (e: any) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const { address, isConnected } = useAccount();

  const { isOpen, onOpen, onClose } = useDisclosure();

  try{
  useContractEvent({
    address: "0xa3aA8018Ec10D41b4804341aAfEFddb7f69C0cA8",
    abi: ABI,
    eventName: "ProofSubmitted",
    listener: ( userAddress,verified, error) => {
      console.log(verified, userAddress, error)
      if (verified) {
        setUserAddress(userAddress as string);
      }
    },
  });
} catch(e) {
  console.log(e)
}

  const toast = useToast();

  
    const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: provenanceABI,
    functionName: "addProduct",
    args: [
      (productData as any).productid,
      (productData as any).productname,
      (productData as any).description,
      (productData as any).Location,
      imageUrl,
      (productData as any).locationURL,
    ],
  });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const { chain } = useNetwork()
  const { chains, error, isLoading:isNetworkLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setProductData({
          locationURL: `https://www.google.com/maps?q=${latitude},${longitude}`,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Product Added",
        description: "Product has been added successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (userAddress == address) {
      toast({
        title: "Manufacturer Role Verified",
        description: "Manufacturer Role has been verified successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
      write?.();
      setUserAddress("");
    }
  }, [userAddress]);

  return (
    <>
      <Head>
        <title>Add Product</title>
        <meta name="description" content="Chain - Add Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 my-8 mx-auto max-w-[1080px]">
        <div className="max-w-7xl pt-5 pb-5 mx-auto">
          <Header heading="Add Product" />
          <div className="flex flex-col text-center w-full">
            <div className="w-full py-4 overflow-x-hidden overflow-y-auto md:inset-0 justify-center flex md:h-full">
              <div className="relative w-full h-full md:h-auto">
                <div className="relative bg-white backdrop-blur-sm bg-opacity-20 rounded-lg shadow dark:bg-gray-700 dark:bg-opacity-20">
                  <div className="px-6 py-6 lg:px-8">
                    <form className="space-y-6">
                      <div className="flex flex-col md:flex-row md:space-x-5">
                        <div className="w-full md:w-1/2 space-y-6 mb-7 md-mb-0">
                          <Input
                            id="productid"
                            name="productid"
                            label="Product ID"
                            type="text"
                            placeholder="Product ID"
                            onChange={handleData}
                          />
                          <Input
                            id="productname"
                            name="productname"
                            label="Product Name"
                            placeholder="Product Name"
                            onChange={handleData}
                          />
                          <Input
                            id="description"
                            name="description"
                            label="Description"
                            placeholder="Description"
                            onChange={handleData}
                          />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                          <Input
                            id="Location"
                            name="Location"
                            label="Location"
                            placeholder="Location"
                            onChange={handleData}
                          />
                          <div className="flex space-x-5">
                            <FileUpload
                              id="productimage"
                              name="productimage"
                              label="Product Image"
                              onChange={(e: any) => {
                                const image = URL.createObjectURL(
                                  e.target.files[0]
                                );
                                setImage(image);
                                const files = (e.target as HTMLInputElement)
                                  .files!;
                                const client = new Web3Storage({
                                  token:
                                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
                                });
                                client.put(files).then((cid) => {
                                  console.log(cid);
                                  setImageUrl(
                                    `https://${cid}.ipfs.w3s.link/${files[0].name}`
                                  );
                                });
                              }}
                            />
                            {/* <Image
                              src={image}
                              alt="preview"
                              width={200}
                              height={200}
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="max-w-[200px] flex m-auto">
                        <Button label="Add Product" onClick={() => {
                            write?.();
                        }} />
                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>
                              {" "}
                              Verify your Manufacturer Role
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <Text className="font-semibold text-sm text-gray-500 text-center pb-5 -pt-5">
                                Please verify with the same wallet address that
                                is connected to this site.
                              </Text>
                              <Box className="flex flex-col items-center justify-center">
                                <QRCode
                                  level="Q"
                                  style={{ width: 350 }}
                                  value={JSON.stringify(manufacturerQR)}
                                />
                              </Box>
                            </ModalBody>
                            <ModalFooter>
                              <Button label="Close" onClick={onClose} />
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Addproduct;
